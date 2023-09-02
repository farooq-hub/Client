import { useEffect, useRef, useState } from "react"
import { usersGet, usersPatch } from "../../Services/userApi"
import  avatar  from "../../assets/very_big_Luffy.jpg"
import { toast } from "react-toastify"
import  addDp  from "../../assets/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"

// const apiUrl = import.meta.env.VITE_API_URL;

const Profile = () => {
    
    
    const [userData,setUserData] = useState({})
    const [updateUser,setupdateUser] = useState(false)
    // const [remainter,setRemainter] = useState(false)
    const img = useRef()
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        place:'',
        file: null,
    });

    let imageSrc = formData.file ? URL.createObjectURL(formData.file) : (userData?.image || avatar );

    const getServiceList =async ()=>{
        await usersGet('/profile')
        .then((res)=>{
            res ? setUserData(res.userData[0]) : null
        }).catch((error)=>{
            console.log(error);
        })
    }

    const updateOpen = ()=>{
        setupdateUser(true);
        setFormData({
            name: userData?.name,
            email: userData?.email,
            place: userData?.place,
        });
    }
    const updateCancel = ()=>{
        setupdateUser(false);
        setFormData({
            name: '',
            email:'',
            place:'',
            file: null,
        });
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setFormData(prevFormData => ({
            ...prevFormData,
            file
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
        const error = await errorHandle()
        if(!error){
            const img =true;
            console.log(formData);
            await usersPatch('/editProfile',formData,img).then((res)=>{
                res.userData? setUserData(res.userData):''
                userData.image ? setUserData(prevUserData => ({
                    ...prevUserData,
                    image:res.image
                })) :''
                updateCancel()
            }).catch((error)=>{
                console.log(error);
            })
        }
    }

    const errorHandle = () => {
        const { name, email,file,place } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(name !== userData.name || email !== userData.email|| file || place){
            if(name.trim().length < 2){
                toast.error('Enter a valid name')
                return true
            }else if(!emailRegex.test(email)){
                toast.error('Enter a valid email address')
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
        getServiceList()
    }, []);
  return (
    <div className="w-full">
        
    
        <div className="w-full h-full  bg-white border border-gray-100 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10 mt-12">
                <div className="rounded-full shadow-slate-500 mb-4">
                    <img className="w-40 h-40 p-2 mb-3 rounded-full object-cover shadow-lg" src={imageSrc} alt="loading..."/>
                </div>
                <p className="mb-3 text-2xl font-medium text-gray-900 uppercase underline">MR: {userData.name}....</p>
                <div className="shadow-lg p-4 border-gray-500 rounded-md">
                    <p className="mb-1 text-lg font-serif text-gray-900 ">Email  : <span className="text-base text-gray-700">{userData.email}</span></p>
                    <p className="mb-1 text-lg font-mono text-gray-900  ">Phone   : <span className="text-base text-gray-700">+91 {userData.phone}</span></p>
                    <p className="mb-1 text-lg font-serif text-gray-900 ">Wallet : <span className="text-base text-gray-700">₹ {userData.wallet}.00</span></p>
                    {userData.place?<p className="mb-1 text-lg font-serif text-gray-900 ">Place : <span className="text-base text-gray-700">{userData.place}</span></p>:''}

                    {/* <p className="mb-1 text-lg  text-gray-900 uppercase">₹: {userData.wallet}</p> */}

                </div>
{/* 
                <input className="text-sm text-gray-500 border-none " placeholder={apiUrl+'/register?referalNumber='+userData.referalNumber}/> */}
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700" onClick={()=>updateOpen()}>Update Profile</button>
                    {/* <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Message</button> */}
                </div>
            </div>
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
                            <div className="rounded-full shadow-slate-500 mb-4 flex items-center justify-center flex-col">
                                <img className="w-40 h-40 p-2 mb-3 rounded-full object-cover shadow-lg" src={imageSrc === avatar? addDp : imageSrc} onClick={()=>img.current.click()} alt="loading..."/>
                                <input type="file" className="hidden" name="file" ref={img} onChange={handleFileChange}/>
                            </div>
                            <div className="flex items-center justify-between w-full mt-5 gap-x-2">
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
                            <div className="flex items-center justify-between w-full mt-5 gap-x-2 ">
                                <select
                                    id="Place"
                                    name="Place"
                                    autoComplete="Place"
                                    className="block w-56 text-center rounded-md  border-2 py-2 text-gray-900 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6"
                                    value={formData.place}
                                    onChange={(e) =>
                                        setFormData({ ...formData, place: e.target.value })
                                    }
                                >
                                    <option value="" disabled hidden>
                                        {formData.place ? formData.place : "Select a place"}
                                    </option>
                                    {keralaDistricts.map((district) => (
                                        <option key={district} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select> 
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
