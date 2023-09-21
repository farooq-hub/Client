import React, { useRef, useState } from 'react'
import Modal from '../customComponent/Modal'
import ImageSlider from '../ImageSlider'
import { toast } from 'react-toastify';
import { BiImageAdd } from 'react-icons/bi';
import Select from 'react-select';
import { providerGet } from '../../Services/providerApi';
import Button from '../customComponent/Button';


const Options = () => {

    const [optionsList,SetOptionsList] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [serviceOptions, setServiceOptions] = useState([])
    const [modal,setModal] = useState('')
    const [loading,setLoading] = useState('')
    const [error, setError] = useState('');
    const img = useRef()
    const [formData, setFormData] = useState({
        title: '',
        description:'',
        optionImages: [],
        price:'',
        service:'',
        priceOption:''
    });

    // const validateFormData = () => {
    //     const { optionImages, caption } = formData;

    //     if (caption.trim().length ==0) {
    //         toast.warn('Add Caption for post');
    //         setError('Add Caption for post')
    //         return true;
    //     }else if (optionImages.length == 0) {
    //         toast.warn('Add a Image for post');
    //         setError('Add a Image for post')
    //         return true;
    //     }else if (optionImages.length > 10) {
    //         toast.warn('Maximum 10 Images only allowed');
    //         setError('Maximum 10 Images only allowed')
    //         return true;
    //     }else {
    //         setError('')
    //         return false
    //     }
    // };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const isImage = (file) => {
        const acceptedImageTypes = ["image/jpeg", "image/jpg", "image/avif", "image/png", "image/gif" ,"image/webp"]; // Add more types if necessary
        return acceptedImageTypes.includes(file.type);
    };

    const handleFileChange = (event) => {
        let files = Array.from(event.target.files)
        const imageFiles = files.filter(isImage);
        if (imageFiles.length == files.length){
            setFormData((prevFormData) => ({
              ...prevFormData,
              optionImages: files,
            }));
            setCurrentImageIndex(0)
        }else{
            toast.warn('Unsupported file found(Only Image files is allowed)!');
            // setError('Unsupported file found(Only Image files is allowed)!')
        }
    };

    const addOption =async (event) =>{
        event.preventDefault();
        console.log(formData);

        // setLoading('submitForm')
        console.log('jjjjjju');
        // const errors =await validateFormData();
        // if (!errors) {
        //     setLoading(true);
        //     let img = true
        //     try {
        //         const form = new FormData();
        //         form.append('caption',formData.caption)
        //         form.append('tagline', formData.tagline)
        //         formData.optionImages.forEach((file) => {
        //             form.append('optionImages', file);
        //         });
        //         console.log(form);
        //         await providerPost('/post',form,img).then((res)=>{
        //             res && res.newPost?setPostsList(prevPostsList => [...prevPostsList, res.newPost]):''
        //             addOptionClose()
        //             setLoading(false);
        //             setIsOpen(false);
        //         }).catch((error)=> {console.log(error)})
        //     } catch (error) {
        //         console.log(error);
        //         setLoading(false);
        //     }
        // }
    }

    const addOptionClose = ()=>{
        console.log('lllll');
        setModal('')
        // setFormData({
        //     caption: '',
        //     tagline:'',
        //     optionImages: [],
        // })
        setCurrentImageIndex(0)
    }

    const getServiceList =async () => {
        setModal('add-option')
        await providerGet('/serviceList').then((response)=>{
            response?.serviceList?
            setServiceOptions(response.serviceList.map((service) => ({
                label: service.serviceName,
                value: service._id,
            }))):console.log('nauiii');
        }).catch ((error)=>console.log(error))
    }

    const priceOption = [
        {value:"Per day",label:"Per day"},
        {value:"Per person",label:"Per person"}
    ]

    return (
        <>
            <section className="container px-4 mx-auto ">
            <div className='w-full h-16 bg-slate-200 my-2  rounded-md flex justify-end items-center p-4'> 
                <Button content={'Add Course'} handelEvent={getServiceList} className={'p-2.5 text-slate-100 hover:text-white hover:bg-slate-600 rounded-md bg-slate-500'}/>
            </div>
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 -border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 -divide-gray-700">
                                    <thead className="bg-gray-50 -bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 -text-gray-400">
                                                <button className="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Service Name</span>
                                                </button>
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -text-gray-400">
                                                Service Image
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -text-gray-400">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 -divide-gray-700 -bg-gray-900">
                                        {/* {serviceList?.length > 0 ? (
                                            serviceList.filter((service) => service.serviceName.includes(searchText)).map((service) => (
                                                <tr key={service._id}>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div>
                                                            <h2 className="font-medium text-black">{service?.serviceName}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap ">
                                                        <div>
                                                            <img className="h-12 font-bold ml-9" src={service.serviceImage} alt="Service Image" />
                                                        </div>
                                                    </td>
                                                    
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        
                                                        <button className="px-4 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-80"
                                                            onClick={() => openEditModal(service) || setEditOpen(true) }>Edit</button>                              
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-500" colSpan={3}>
                                                    No Services found
                                                </td>
                                            </tr>
                                        )} */}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                {modal == 'add-option'?
                    <Modal closeModal={loading !== 'submitForm' ?addOptionClose:''}
                        modalHeader={
                            <div className=' text-center '>
                                <h1 className='text-black font-semibold text-xl my-4'>Add Option</h1>
                                <hr />
                            </div>
                        }
                        modalBody={
                            <div className="p-4 overflow-hidden text-left align-middle transition-all transform bg-white  sm:max-w-sm rounded-xl sm:w-full sm:p-6">
                                <div className={`flex items-center justify-center w-80 overflow-hidden h-48 mb-4 ${!formData.optionImages.length?'bg-gray-300':''} rounded`}>
                                        <ImageSlider images={formData.optionImages} height={'h-56 '} onClick={()=>img.current.click()} manageIndex={setCurrentImageIndex} currentIndex={currentImageIndex} />
                                        {!formData.optionImages.length?<BiImageAdd onClick={()=>img.current.click()} className="w-10 h-10 text-gray-200 dark:text-gray-600" />:''}
                                        <input type="file" name="optionImages" ref={img} accept="image/jpeg,image/jpg,image/avif,image/png,image/gif,image/webp" className='hidden' onChange={handleFileChange} multiple/>
                                </div>
                                
                                <form onSubmit={loading !== 'submitForm' ? addOption : (e)=>{e.preventDefault();toast.warn('submit processing')}} encType="multipart/form-data" className='space-y-4 '>
                                    <div className="flex items-center justify-between w-full">
                                        <input type="text" id="title" name="title" placeholder="Options title here" value={formData.title} onChange={handleChange}
                                            className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md "
                                        />
                                    </div>
                                    <div className="text-black border border-gray-200 rounded-md ">
                                        <Select className="basic-single  text-black" placeholder="Select which price option" isClearable isSearchable
                                            name="priceOption" onChange={handleChange} 
                                            options={priceOption}
                                        />
                                    </div> 
                                    <div className="text-black">
                                        <Select name="service" onChange={handleChange} className="basic-single  text-black"
                                            placeholder="Select which service" isClearable isSearchable value={formData.service}
                                            options={serviceOptions}
                                        />
                                    </div> 
                                    <div>
                                        <textarea className="border-2 rounded-md  border-gray-200 w-full h-20" name="description" placeholder='Description here'  onChange={handleChange}/>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <input type="number" min="0" name="price" placeholder="Options price here" value={formData.price} onChange={handleChange}
                                            className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md "
                                        />
                                    </div>
                                    <p className='text-center text-sm text-red-600'>{error}</p>
                                    <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                        <Button handelEvent={loading !== 'submitForm' ?addOptionClose:()=>toast.warn('submit processing')} content={'Close'} type='button' className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 border border-gray-200 rounded-md hover:bg-gray-200"/>
                                        <Button type="submit" className={`px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm bg-slate-700 rounded-md hover:bg-slate-500 text-white font-bold ${
                                            loading === 'submitForm' ? 'hover:cursor-not-allowed ' : ''} duration-[500ms,800ms]`}content={
                                                <div className="flex items-center justify-center">{loading === 'submitForm' ? (
                                                <><div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div><p className="ml-2"> Processing... </p></>
                                            ) : (<p>Submit</p>)}
                                    </div>}/>
                                    </div>
                                </form>
                            </div>
                        }
                    />:""}
            </section>
        </>
    )
}

export default Options