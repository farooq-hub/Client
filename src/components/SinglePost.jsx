import { useEffect, useState } from "react";
import  avatar  from "../assets/very_big_Luffy.jpg"
import  back  from "../assets/pexels-sandra-filipe-7087668.jpg"
import PropTypes from 'prop-types';
import { IoMdClose } from "react-icons/io";
import ImageSlider from "./ImageSlider";
import { providerGet } from "../Services/providerApi";


const SinglePost = ({post,setSelectedPost,setIOpenPost,providerData})=> {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const getPostDetails =async () => {
        await providerGet(`/post-details?postId=${post._id}`).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        })
    } 
    useEffect(()=>{
    },[])

    return (
        // <>
        //     <div className="fixed inset-0 z-10 overflow-y-auto">
        //         <div
        //             className="fixed inset-0 w-full h-full bg-black opacity-40"
        //         ></div>
        //         <div className="flex items-center min-h-screen px-4 py-8">
        //             <div className="mx-auto mb-10 border-b-2 max-w-xl rounded-md z-10 bg-white ">
        //                 <div className="bg-white  rounded-md">
        //                     <div className="flex items-center px-4 py-3">
        //                     <img className="h-8 w-8 rounded-full" src={providerData.profilePic ? providerData.profilePic : avatar}/>
        //                     <div className="ml-3 ">
        //                         <span className="text-sm font-semibold antialiased block leading-tight">{providerData.name}</span>
        //                         <span className="text-gray-600 text-xs block">{providerData.location ? providerData.location : 'Kerala'}</span>
        //                     </div>
        //                     <button className="ms-auto text-xl" onClick={()=>{
        //                         setSelectedPost({});
        //                         setIOpenPost(false)
        //                     }}><IoMdClose/></button>
        //                     </div>
        //                     <ImageSlider images={post.postImages} height={'max-h-full'} manageIndex={setCurrentImageIndex} currentIndex={currentImageIndex}/>

        //                     {/* <img src={back} className="rounded-md"/> */}
        //                     <div className="flex items-center justify-between mx-4 mt-3 mb-2 ">
        //                     <div className="flex gap-5">
        //                         <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        //                         <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
        //                         <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
        //                     </div>
        //                     <div className="flex">
        //                         <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
        //                     </div>
        //                     </div>
        //                     <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
        //                     <div className="font-semibold text-sm mx-4 mt-2 mb-4">{post.caption}</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
        <>

<div className="fixed inset-0 flex items-center justify-center z-50 ">
  <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

  <div className="modal-container bg-white   lg:mx-auto  rounded-lg shadow-lg z-50 mx-10 md:mx-16 ">
    <div className="grid grid-cols-1 lg:grid-cols-3  lg:h-[500px] xl:h-[850px] w-full  h-full overflow-hidden lg:w-[900px]  xl:w-[1200px]">
        <div className="lg:hidden items-center px-4 py-3 flex">
            <img className="h-8 w-8 rounded-full" src={providerData.profilePic ? providerData.profilePic : avatar}/>
            <div className="ml-3 ">
                <span className="text-sm font-semibold antialiased block leading-tight">{providerData.name}</span>
                <span className="text-gray-600 text-xs block">{providerData.location ? providerData.location : 'Kerala'}</span>
            </div>
            <button className="ms-auto text-xl" onClick={()=>{
                setSelectedPost({});
                setIOpenPost(false)
            }}><IoMdClose/></button>
        </div>
        <div className="col-span-2 flex items-center bg-black">
            <ImageSlider images={post.postImages} height={'max-h-full '} manageIndex={setCurrentImageIndex} currentIndex={currentImageIndex} object={'object-contain'}/>
        </div>
        <div className="lg:col-span-1">
            <div className="lg:flex items-center px-4 py-3 hidden">
                <img className="h-8 w-8 rounded-full" src={providerData.profilePic ? providerData.profilePic : avatar}/>
                <div className="ml-3 ">
                    <span className="text-sm font-semibold antialiased block leading-tight">{providerData.name}</span>
                    <span className="text-gray-600 text-xs block">{providerData.location ? providerData.location : 'Kerala'}</span>
                </div>
                <button className="ms-auto text-xl" onClick={()=>{
                    setSelectedPost({});
                    setIOpenPost(false)
                }}><IoMdClose/></button>
            </div><hr/>
            <div>
            <div className="grid grid-cols-6 h-auto ">
                <div className="h-10 t overflow-hidden p-[.2rem] bg-slate-400 w-10 mx-2 my-2 rounded-full col-span-1">
                    <img className="rounded-full object-fill" src="https://images.unsplash.com/photo-1551122089-4e3e72477432?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cnVieXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="col-span-5 mr-2 my-3">
                    <p className="text-sm"><span className="mr-2 text-slate-900 font-semibold">Nirmala.</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Expedita, maiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!</p>
                     <div className="flex">
                        <p>11.2021</p>
                        <div className="text-xs cursor-pointer flex h- w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
              <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </div>
                     </div>
                        {/* <div className="font-medium">
                            <a href="#" className="hover:underline text-sm">
                            <small>Nirmala</small>
                            </a>
                        </div>
                        <div className="text-xs">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
                        </div>
                        <div className="flex justify-start items-center text-xs w-full">
                        <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                            <a href="#" className="hover:underline">
                            <small>Like</small>
                            </a>
                        <small className="self-center">.</small>
                            <a href="#" className="hover:underline">
                            <small>Reply</small>
                            </a>
                        <small className="self-center">.</small>
                            <a href="#" className="hover:underline">
                            <small>15 hour</small>
                            </a>
                        </div>
                        </div>
                        */}
                </div>
        
        {/* <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
          <a href="#" className="">
            <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
              <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </div>

          </a>
        </div> */}

      </div>
            </div>

            <div className="mt-6">
                <button className="modal-close px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-600" onClick={()=>{
                    setSelectedPost({});
                    setIOpenPost(false)
                }}>Close</button>
            </div>

        </div>
    </div>

  </div>
</div>


    </>
    );

}
SinglePost.propTypes = {
    post: PropTypes.object,
    setIOpenPost: PropTypes.func, 
    setSelectedPost: PropTypes.func, 
    providerData: PropTypes.object

};



export default SinglePost