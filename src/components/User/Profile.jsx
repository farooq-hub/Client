import { useEffect, useState } from "react"
import { usersGet } from "../../Services/userApi"
import  avatar  from "../../assets/very_big_Luffy.jpg"
const apiUrl = import.meta.env.VITE_API_URL;

const Profile = () => {
    
    
    const [userData,setUserData] = useState({})
    const [updateUser,setupdateUser] = useState(false)



    const getServiceList =async ()=>{
        await usersGet('/profile')
        .then((res)=>{
            res ? setUserData(res.userData[0]) : null
        }).catch((error)=>{
            console.log(error);
        })
    }


    useEffect(() => {
        getServiceList()
    }, []);
  return (
<div>
    
</div>   
    <div className="w-full h-full  bg-white border border-gray-100 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10 mt-12">
            <div className="rounded-full shadow-slate-500 mb-4">
                <img className="w-40 h-40 p-2 mb-3 rounded-full object-cover  shadow-lg" src={avatar} alt="loading..."/>
            </div>
            <p className="mb-3 text-2xl font-medium text-gray-900 uppercase underline">MR: {userData.name}....</p>
            
            
            <p className="mb-1 text-lg font-serif text-gray-900 ">EM: {userData.email}</p>
            <p className="mb-1 text-lg font-semibold text-gray-900 uppercase">PH: +91 {userData.phone}</p>
            <p className="mb-1 text-lg  text-gray-900 uppercase">₹: {userData.wallet}</p>

            <span className="text-sm text-gray-500">{apiUrl}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700" onClick={()=>setupdateUser(true)}>Update Profile</button>
                {/* <button href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Message</button> */}
            </div>
        </div>
    </div>
    // {!updateUser ? 
    
    // }

  )
}

export default Profile
