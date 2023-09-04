import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { providerGet, providerPost } from "../../Services/providerApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrPrevious,GrNext } from "react-icons/gr";


const Post = () => {

    const providerId = useSelector((state) => state.provider.providerId);

    const [loading, setLoading] = useState(false);
    const [postsList, setPostsLisit] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        providerId,
        caption: '',
        tagline:'',
        postImages: [],

    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        console.log(currentImageIndex);
        setCurrentImageIndex((prevIndex) => Math.floor((prevIndex + 1) % formData.postImages.length));
      };
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? Math.floor(formData.postImages.length - 1) : Math.floor(prevIndex - 1)
        );
      };
  

    const [searchText, setSearchText] = useState('');

    const validateFormData = () => {
        const { postImages, caption } = formData;

        if (caption.trim().length ==0) {
            toast.warn('Add Caption for post');
            setError('Add Caption for post')
            return true;
        }else if (postImages.length == 0) {
            toast.warn('Add a Image for post');
            setError('Add a Image for post')
            return true;
        }else if (postImages.length > 10) {
            toast.warn('Max Images only 10');
            setError('Max Images only 10')
            return true;
        }else {
            setError('')
            return false
        }
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        let files = []
        for(let i=0;i<event.target.files.length ; i++){
            files.push(event.target.files[i])
        }
        setFormData((prevFormData) => ({
          ...prevFormData,
          postImages: files,
        }));
      };
      

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors =await validateFormData();
        if (!errors) {
            setLoading(true);
            let img = true
            try {
                await providerPost('/addPost',formData,img).then((res)=>{
                    res && res.postData?setPostsLisit(prevPostsList => [...prevPostsList, res.postData]):''
                    // addPostClose()
                    setLoading(false);
                    // setIsOpen(false);
                }).catch((error)=> {console.log(error)})
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    };


    const getServiceList = async () => {
        try {
            await providerGet('/postsList').then((res)=>{
                setPostsLisit(res.postsList)
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            toast.error(error?.response?.data?.errMsg)
        }
    };
    const addPostClose = ()=>{
        setIsOpen(false)
        setFormData({
            providerId,
            caption: '',
            tagline:'',
            postImages: [],
        })
        setCurrentImageIndex(0)
    }


    useEffect(() => {
        getServiceList()
    }, []);

    return (
        <>
            <section className="container px-4 mx-auto ">
                <div className="sm:flex sm:items-center sm:justify-between  ">
                    <div className="flex w-full ">
                        <div className="flex items-center gap-x-3">
                            <div className="relative flex justify-center">
                                <button onClick={() => setIsOpen(true)}
                                    className="px-4 py-2 mx-auto tracking-wide text-white transition-colors duration-300  bg-slate-500 rounded-md hover:bg-slate-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                >Add <span className="font-semibold text-xl">+</span></button>

                            </div>       
                        </div>
                        <div className="mt-6 w-64 ml-4">
                            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                <input
                                    type="search"
                                    className="relative h-10 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none -border-neutral-600 -text-neutral-200 -placeholder:text-neutral-200 -focus:border-primary"
                                    placeholder="Search posts by tags"
                                    aria-label="Search"
                                    aria-describedby="button-addon1"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 -border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 -divide-gray-700">
                                    <thead className="bg-gray-50 -bg-gray-800">
                                        <tr>
                                            <th className="px-1 text-sm text-gray-500 font-normal text-left rtl:text-right">No</th>
                                            <th scope="col" className="py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                Image
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <span>Likes</span>
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <span>Reports</span>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -text-gray-400">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 -divide-gray-700 -bg-gray-900">
                                        {postsList?.length > 0 ? (
                                            postsList.filter((post) => post.tagline.includes(searchText)).map((post,i) => (
                                                <tr key={post._id}>
                                                    <td className="text-sm text-gray-500 font-normal">{i+1}</td>
                                                    <td className="px-4  py-4 text-sm font-medium whitespace-nowrap ">
                                                        <div>
                                                            <img className="h-12 font-bold ml-9" src={post.postImages[0]} alt="Service Image" />
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div>
                                                            <h2 className="text-black">{post?.likes.length}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div>
                                                            <h2 className="text-red-700">{post?.reports.length}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div>
                                                            <h2 className="text-black">{post?.tagline}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-thin whitespace-nowrap">
                                                        <button className="px-4 py-2 mx-auto tracking-wide text-red-700 capitaliz"><RiDeleteBin6Line/></button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-500" colSpan={3}>
                                                    No posts yet add posts...
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div
                        className="fixed inset-0 z-10 overflow-y-auto bg-slate-200"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex  items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                &#8203;
                            </span>
                    
                            <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl -bg-gray-900 sm:my-8 sm:w-full sm:p-6">
                                {/* <div className="flex items-center justify-center mx-auto">
                                    {formData.postImages[0] instanceof File ? (
                                        <img className=" rounded-lg w-58 h-48" src={URL.createObjectURL(formData.postImages[0])} alt="Selected" />
                                    ) : null}
                                </div> */}
                                    {formData.postImages.length > 0 ? 
                                        <div className="relative w-full max-w-screen-lg mx-auto">
                                            <div className="relative h-56 overflow-hidden">
                                            {Array.from(formData.postImages).map((image, index) => (
                                                <img
                                                key={index}
                                                src={URL.createObjectURL(image)}
                                                alt="Slider Image"
                                                className={`w-full h-auto absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                                                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                />
                                            ))}
                                                <button
                                                className="absolute left-1 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 opacity-70 rounded-full cursor-pointer"
                                                onClick={prevImage}
                                                ><GrPrevious /></button>
                                                <button
                                                className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 opacity-70 rounded-full cursor-pointer"
                                                onClick={nextImage}
                                                ><GrNext/></button>
                                            </div>
                                        </div>
                                    :''}
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div>
                                        <label htmlFor="Caption" className="block text-sm text-gray-500 -text-gray-300 mt-4">Caption</label>
                                        <textarea className="border-2 border-slate-300 w-full h-24" name="caption" id=""  onChange={handleChange}/>
                                    </div>                                    
                                    <div>
                                        <label htmlFor="tagline" className="block text-sm text-gray-500 -text-gray-300 mt-4">Hash Tag</label>
                                        <textarea  className="border-2 border-slate-300 w-full" id=""  name="tagline" onChange={handleChange} placeholder="#new #party"/>
                                    </div>
                                    <div>
                                        <label htmlFor="image" className="block text-sm text-gray-500 -text-gray-300 mt-4">Image</label>
                                        <input 
                                            type="file" 
                                            multiple
                                            onChange={handleFileChange}  
                                            name="postImages" 
                                            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full -file:bg-gray-800 -file:text-gray-200 -text-gray-300 placeholder-gray-400/70 -placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 -border-gray-600 -bg-gray-900 -focus:border-blue-300" />
                                    </div>
                                    <p className='text-center text-sm text-red-600'>{error}</p>
                                    <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                        <button
                                            onClick={addPostClose}
                                            className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300  border border-gray-200 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                        >Cancel</button>
                                        <button
                                            type="submit" className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-700 rounded-md hover:bg-slate-500"
                                        >
                                            {loading ?<span className="">Loading...</span> : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </div>                                           
                        </div>
                    </div>
                )}
            </section>
        </>

    )

};

export default Post;