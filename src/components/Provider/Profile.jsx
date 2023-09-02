import { useEffect, useRef, useState } from "react"
import  avatar  from "../../assets/very_big_Luffy.jpg"
// import  coverPic  from "../../assets/pexels-wendy-wei-1387174.jpg"
import  addDp  from "../../assets/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"
import Select from 'react-select';
import { MdOutlineLocationOn } from "react-icons/md"



import { toast } from "react-toastify"
import { providerGet, providerPatch } from "../../Services/providerApi"

const Profile = () => {
    
    
    const [providerData,setProviderData] = useState({})
    const [serviesOptions, setServiesOptions] = useState([])
    const [selectedService, setSelectedService] = useState([])
    const [districtsOptions, setDistrictsOptions] = useState([])
    const [serviceList, setServiceList] = useState([])

    const [updateUser,setupdateUser] = useState(false)
    const dpPic = useRef()

    const [formData, setFormData] = useState({
        name: '',
        email:'',   
        places:[],
        services:[],
        profilePic: null,
        coverPic:null,
        description:''
    });
    // let options =serviceList.length !=0 ? serviceList.map((service) => ({
    //     label: service.serviceName,
    //     value: service._id,
    // })):null
    let profilePic = formData.profilePic ? URL.createObjectURL(formData.profilePic) : (providerData?.profilePic || avatar );
    let coverPic = formData.coverPic ? URL.createObjectURL(formData.coverPic) : (providerData?.coverPic || null);
    const getProviderData =async ()=>{
        await providerGet('/profile')
        .then((res)=>{
            res ? setProviderData(res.providerData) : null
            setSelectedService(res.providerData.services.map((service)=>{
                return service._id
            }))
        }).catch((error)=>{
            console.log(error);
        })
        await providerGet('/serviceList').then((res)=>{
            setServiceList(res.serviceList)
            setServiesOptions(res.serviceList.map((service) => ({
            label: service.serviceName,
            value: service._id,
            })))
        })
        .catch((err)=>console.log(err))
        setDistrictsOptions(keralaDistricts.map((district) => ({
            value: district,
            label: district,
        })));
    }

    const updateOpen =async ()=>{
        
        console.log(providerData);
        setupdateUser(true);
        setFormData({
            name: providerData?.name,
            email: providerData?.email,
            places: providerData?.places,
            services:selectedService,
            description:providerData?.description
        });
    }
    const updateCancel = ()=>{
        setupdateUser(false);
        setFormData({
            name: '',
            email: '',
            places:[],
            services: [],
            profilePic:null,
            coverPic:null,
            description:''
        });
    }

    const handleFileChange = (event) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]:event.target.files[0]
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));    
    };

    const handleSubmit=async(event)=>{
        event.preventDefault()
        console.log(formData);

        const error = await errorHandle()
        if(!error){
            const img = true;
            console.log(formData);
            await providerPatch('/editProfile',formData,img).then((res)=>{
                
                res.providerData? setProviderData(res.providerData):''
                const filteredServices = serviceList.filter(service => res.providerData.services.includes(service._id.toString()));
                console.log(filteredServices);
                res.providerData.services ? setProviderData(prevUserData => ({
                    ...prevUserData,
                    
                    services:filteredServices,
                    
                })) :''
                updateCancel()
                setSelectedService(filteredServices.map((service)=> service._id))
            }).catch((error)=>{
                console.log(error);
            })
        }
    }

    const errorHandle = () => {
        const { name,email,places,services,profilePic,coverPic,description } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(places,places === providerData.places,providerData.places);
        if(name !== providerData.name || email !== providerData.email ||coverPic ||profilePic ||description){
            if(name.trim().length < 2){
                toast.error('Enter a valid name')
                return true
            }else if(!emailRegex.test(email)){
                toast.error('Enter a valid email address')
                return true
            }else if(places.length == 0){
                toast.error('Select any place')
                return true
            }else if(services.length == 0){
                toast.error('Select  any one services')
                return true
            }else{
                console.log('llllllllllll');
                return false
            }

        }else{
            toast.info("Did't change anything")
            return true
        }
    }

    const keralaDistricts = [
        "All Kerala",
        "Alappuzha",
        "Ernakulam",
        "Idukki",
        "Kannur",
        "Kasaragod",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Malappuram",
        "Palakkad",
        "Pathanamthitta",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad",
    ];
        

    useEffect(() => {
        getProviderData()
    }, []);
  return (
    <div className="w-full bg-slate-200">
        <div className="w-full  bg-white border border-gray-100 rounded-lg shadow-md" 
        //  style={{ backgroundImage: `url(${coverPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
         >
            {/* <img className=" object-cover" src={coverPic} alt="" /> */}
            <div className="flex-row">
                {/* <div className="flex justify-end">
                    <button href="#" className="flex items-end px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700" onClick={()=>updateOpen()}>Update Profile</button>
                </div> */}
                <div className="rounded-full  shadow-slate-500  flex h-56 items-center">
                    <img className="w-40 ml-8 h-40 p-2 rounded-full object-cover shadow-lg" src={profilePic} alt="loading..."/>
                    <p className="ml-8 text-2xl font-medium text-slate-400 uppercase underline"> {providerData.name}</p>
                </div>
                <div className="flex-col ml-8 mb-8 ">
                    <p className="text-xl my-2 font-medium text-slate-400">@{providerData.name}</p>
                    <p className="text-lg my-2 font-medium text-slate-400"> {providerData.description}</p>
                    <div className="flex my-2">
                        <MdOutlineLocationOn className=" text-red-500 text-lg mr-2"/>
                        <p className="text-lg  font-medium text-slate-400">
                        {providerData.places && providerData.places.map((val, i) => {
                            if (providerData.places.length > 1 && i === providerData.places.length - 2){ return val + ' and '}
                            else if(providerData.places.length > 1 && i != providerData.places.length - 1) {return val + ','}
                            else {return val + '.'}
                        })}  
                        </p>    
                    </div>   
                </div>
                    {/* <p className="text-lg font-medium text-slate-400"> {providerData.places.map((val) => val)}</p> */}

                <div className="flex justify-center md:justify-start md:ml-8  mb-4">
                    <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700" onClick={()=>updateOpen()}>Update Profile</button>
                </div>
            </div>
        </div>

        <h3 className="text-4xl font-bold  text-gray-700 m-2 text-center font-serif">Servies</h3>
        <div className="max-w-full overflow-x-scroll cursor-pointer">
            <ul className="flex w-max h-56 md:h-3/4 border  gap-x-8 mt-4 ml-4 shadow-md rounded-2xl">
                {
                    providerData.services && providerData.services.map((val) => {
                        return (
                            <li key={val._id} className="relative flex flex-col items-center shadow-md border  justify-center overflow-hidden  rounded-2xl w-[400px]  h-56 object-cover" 
                            style={{ backgroundImage: `url(${val.serviceImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 w-auto" ></div>
                                <h3 className="z-10 text-3xl font-bold text-slate-100 font-serif">{val.serviceName}</h3>
                                <h3 className="z-10 overflow-hidden text-sm leading-6 text-slate-300">{val.description ?val.description:''}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

         {updateUser ?
            <div className="fixed inset-0 z-10 overflow-y-auto bg-slate-200">
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl -bg-gray-900 sm:my-8 sm:w-full sm:p-6">

                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h1 className="text-center text-xl mb-4 font-medium">Update Profile</h1>
                            <div className=" shadow-sm rounded-md border h-48 shadow-slate-100 mb-2 flex items-center justify-center flex-col"
                            style={coverPic?{ backgroundImage: `url(${coverPic})`, backgroundSize: 'cover', backgroundPosition: 'center' }:{}}
                            >
                                <img className="w-40 h-40 bg-slate-200 p-2 mb-3 rounded-full object-center shadow-lg" src={profilePic === avatar? addDp : profilePic} onClick={()=>dpPic.current.click()} alt="loading..."/>
                                <input type="file" className="hidden" name="profilePic" ref={dpPic} onChange={handleFileChange}/>
                            </div>
  
                            <div className="flex items-center justify-between w-full mt-3 gap-x-2">
                                <input
                                    type="text" minLength={3}
                                    id="name" name="name" onChange={handleChange} value={formData?.name} placeholder={formData?.name}
                                    className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md -bg-gray-900 -text-gray-300 -border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="flex items-center justify-between w-full mt-5 gap-x-2">
                                <input
                                    id="email" name="email" type="email" onChange={handleChange} value={formData.email} placeholder={formData.email}
                                    className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md -bg-gray-900 -text-gray-300 -border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm text-gray-500 -text-gray-300 mt-4">Cover pic</label>
                                <input 
                                    type="file" 
                                    onChange={handleFileChange}  
                                    name="coverPic" 
                                    className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full -file:bg-gray-800 -file:text-gray-200 -text-gray-300 placeholder-gray-400/70 -placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 -border-gray-600 -bg-gray-900 -focus:border-blue-300" />
                            </div>
                            <div className="flex items-center justify-between w-full mt-5 gap-x-2">
                                <textarea
                                    id="email" name="description" onChange={handleChange}  placeholder='description' value={formData.description}
                                    className="flex-1 block h-10 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md -bg-gray-900 -text-gray-300 -border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 -focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="relative mt-4">
                                <Select className="placeholder-gray-400 focus:outline-none
                                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block
                                    border-2 rounded-2xl"
                                    name="services"
                                    placeholder='Selects Your Service Area...'
                                    options={districtsOptions}
                                    isMulti
                                    value={formData.places.map((place) => ({
                                        value: place,
                                        label: place,
                                    }))}
                                    onChange={(selectedOptions) => {
                                        const selectedDistrict = selectedOptions.map((option) => option.value);
                                        if (selectedDistrict.includes('All Kerala')) {
                                            if (selectedDistrict.length > 1) {
                                                toast.warn('Already Selected All Kerala');
                                            }
                                            setFormData((prevFormData) => ({
                                                ...prevFormData,
                                                places: ['All Kerala']
                                            }))
                                        } else {
                                            setFormData((prevFormData) => ({
                                                ...prevFormData,
                                                places: selectedDistrict.filter((place) => place !== "All Kerala"),
                                            }));
                                        }
                                    }}
                                />
                            </div>
                            <div className="relative mt-4">
                                <Select className="placeholder-gray-400 focus:outline-none
                                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block
                                    border-2 rounded-2xl"
                                    name="services"
                                    placeholder='Selects Your Services...'
                                    options={serviesOptions}
                                    isMulti
                                    value={formData.services.map((service) =>{
                                        return serviesOptions.find((option) => option.value === service)
                                    }
                                    )}
                                    onChange={(selectedOptions) => {
                                        const selectedServices = selectedOptions.map((option) => option.value);
                                        setFormData((prevFormData) => ({
                                            ...prevFormData,
                                            services: selectedServices,
                                        }));
                                    }}
                                />
                            </div>
                            <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                <button
                                    onClick={updateCancel}
                                    className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium text-black  border border-gray-300 hover:bg-slate-100 tracking-wide capitalize transition-colors duration-300 transform rounded-md  focus:outline-none"
                                >Cancel</button>
                                <button
                                    type="submit" className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                >
                                    {/* {loading ? <span className="loading loading-dots loading-xs"> </span> : 'Confirm'} */}Confirm
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div> : <></>
         } 

    </div>  
  )
}

export default Profile
