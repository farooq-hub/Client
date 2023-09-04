import PropTypes from 'prop-types';
import profilAvadar from "../../assets/istockphoto-1316420668-612x612.jpg"
import coverPic from "../../assets/pexels-sandra-filipe-7087668.jpg"
import { MdOutlineLocationOn } from 'react-icons/md';
import  avatar  from "../../assets/very_big_Luffy.jpg"
import  back  from "../../assets/pexels-wendy-wei-1387174.jpg"

const SingleProvider = ({providerData,setViewProvider,setSelectedProvider}) => {
  return (
    <div>
        
        <div className=" ml-3 ">
            <button className="w-24 text-center rounded-xl bg-gray-500 hover:shadow-lg font-semibold text-white py-2" 
                            onClick={()=>{
                                setViewProvider(false)
                                setSelectedProvider({})
                            }}
            >Back</button>
        </div>
        <div  className="w-full mb-2 cursor-pointer shadow-md rounded-lg text-gray-900 p-3">
                <div className="rounded-t-lg h-48 overflow-hidden">
                    <img className="object-cover w-full" src={providerData.coverPic ? providerData.coverPic : coverPic } alt='Mountain'/>
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src={providerData.profilePic ? providerData.profilePic : profilAvadar } alt='loading..'/>
                </div>
                <div className="flex-row items-center text-center mt-2">
                    <h2 className="font-semibold mb-4 uppercase text-2xl">{providerData.name}</h2>
                    <p className="text-center text-gray-500 px-12 ">{providerData.description?providerData.description:''}</p>
                    <p className="text-center text-gray-700 text-[1.05rem] font-mono py-1">+91 {providerData.phone}</p>
                    <p className="text-center text-gray-700 text-[1.05rem] font-normal">{providerData.email}</p>
                    
                </div>
                <div className="flex justify-center mt-2">
                    <MdOutlineLocationOn className=" text-red-500 text-2xl "/>
                    <p className="text-center font-semibold  text-[1.1rem] text-gray-600 ">{providerData.places.map((place)=>place+',')}</p>
                </div>
                {/* <div className="p-4 border-t mx-8 mt-2">
                    <button className="w-1/2 block mx-auto rounded-full bg-gray-500 hover:shadow-lg font-semibold text-white px-6 py-2" >Details</button>
                </div> */}
            </div>
            
            <div className="block md:hidden mb-4">
            <h3 className="text-4xl font-bold  text-gray-700 m-2 text-center underline bg-white font-serif">Servies</h3>
            <div className="max-w-full overflow-x-scroll cursor-pointer">
                <ul className="flex h-56 md:h-3/4   gap-x-8 mt-4 ml-4 ">
                    {
                        providerData.services && providerData.services.map((val) => {
                            return (
                                <li key={val._id} className="mx-auto relative flex flex-col items-center shadow-md border  justify-center overflow-hidden  rounded-2xl w-[400px]  h-56 object-cover" 
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-8">
                <h3 className="text-4xl font-bold bg-white  text-gray-700  text-center font-serif underline">Post</h3>
                <div className="bg-white pt-4 w-full">
                    <div className="mx-auto mb-10 border-b-2 max-w-xl rounded-md">
                        <div className="bg-white  rounded-md">
                            <div className="flex items-center px-4 py-3">
                            <img className="h-8 w-8 rounded-full" src={avatar}/>
                            <div className="ml-3 ">
                                <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                                <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
                            </div>
                            </div>
                            <img src={back} className="rounded-md"/>
                            <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                            <div className="flex gap-5">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </div>
                            <div className="flex">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                            </div>
                            <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                        </div>
                    </div>
                    <div className=" mx-auto mb-10 border-b-2 max-w-xl rounded-md">
                        <div className="bg-white  rounded-md">
                            <div className="flex items-center px-4 py-3">
                            <img className="h-8 w-8 rounded-full" src={avatar}/>
                            <div className="ml-3 ">
                                <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                                <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
                            </div>
                            </div>
                            <img src={back} className="rounded-md"/>
                            <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                            <div className="flex gap-5">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </div>
                            <div className="flex">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                            </div>
                            <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                        </div>
                    </div>
                    <div className="mx-auto mb-10 border-b-2 max-w-xl rounded-md">
                        <div className="bg-white  rounded-md">
                            <div className="flex items-center px-4 py-3">
                            <img className="h-8 w-8 rounded-full" src={avatar}/>
                            <div className="ml-3 ">
                                <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                                <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
                            </div>
                            </div>
                            <img src={back} className="rounded-md"/>
                            <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                            <div className="flex gap-5">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </div>
                            <div className="flex">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                            </div>
                            <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                        </div>
                    </div>
                    <div className="mx-auto mb-10 border-b-2 max-w-xl rounded-md">
                        <div className="bg-white  rounded-md">
                            <div className="flex items-center px-4 py-3">
                            <img className="h-8 w-8 rounded-full" src={avatar}/>
                            <div className="ml-3 ">
                                <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                                <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
                            </div>
                            </div>
                            <img src={back} className="rounded-md"/>
                            <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                            <div className="flex gap-5">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </div>
                            <div className="flex">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                            </div>
                            <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block col-span-4 bg-white border-l-2 ">
                <h3 className="text-4xl font-bold  text-gray-700 m-2 text-center font-serif">Servies</h3>
                <div className="w-full  cursor-pointer ">
                    <ul className="flex  h-56 md:h-3/4 gap-x-8 mt-4 ml-4">
                        {
                            providerData.services && providerData.services.map((val) => {
                                return (
                                    <li key={val._id} className="relative mx-auto flex flex-col items-center shadow-md border  justify-center overflow-hidden  rounded-2xl w-[400px]  h-56 object-cover" 
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
            </div>
        </div>

    </div>
  )
}

SingleProvider.propTypes = {
    providerData: PropTypes.object.isRequired, // Define the expected type and mark it as required
    setViewProvider:PropTypes.func,
    setSelectedProvider:PropTypes.func
};


export default SingleProvider