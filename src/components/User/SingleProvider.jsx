import PropTypes from 'prop-types';
import ProfileHeader from '../Provider/ProfileHeader';
import { BiGridAlt } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { MdMiscellaneousServices } from 'react-icons/md';
import ProfilePost from '../ProfilePost';
import OnePost from '../OnePost';
import Service from '../Service';
import Spinner from '../Spinner';
import { usersGet } from '../../Services/userApi';
import useWidthSize from '../../utils/useWidthSize';
import Button from '../customComponent/Button';
import { useSelector } from 'react-redux';
import SinglePost from '../SinglePost';

const SingleProvider = ({providerData,setViewProvider,setSelectedProvider}) => {

    const [activeTab, setActiveTab] = useState('post')
    const [loading, setLoding] = useState('')
    const [postList, setPostList] = useState([])
    const widthSize = useWidthSize();
    const [singlePost, setSinglePost] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const userData = useSelector((state) => state.user.userData);


    const getPosts = async (id)=>{
        setLoding('post')
        await usersGet(`/post?id=${id}`)
        .then((res)=>{
            res ? setPostList(res.postsList) : null
            setLoding('')

        }).catch((error)=>{
            console.log(error);
        })
    }

    const openPost = (post) =>{
        setSinglePost(true)
        setSelectedPost(post)
    }

    useEffect(() => {
        getPosts(providerData._id)
    }, []);

    return (
        <div className='w-full bg-white'>
            
            <div className=" ml-3 ">
                <Button className="w-24 text-center rounded-xl bg-gray-500 hover:shadow-lg font-semibold text-white py-2" 
                                handelEvent={()=>{
                                    setViewProvider(false)
                                    setSelectedProvider({})
                                }} content={'Back'}/>
            </div>
            <ProfileHeader providerData={providerData} role={'user'} />
            <div className="flex flex-row text-2xl gap-3 lg:text-xs items-center justify-evenly  border-t uppercase text-gray-400 tracking-widest h-16">
                        <a
                            className={`${
                                activeTab === "post"
                                    ? "text-black border-t border-black"
                                    : ""
                            } flex justify-center items-center h-full  cursor-pointer`}
                            onClick={() => setActiveTab("post")}
                        >
                            <BiGridAlt />
                            <span className="hidden lg:inline-block ml-2">
                                Posts
                            </span>
                        </a>
                        <a
                            className={`${
                                activeTab === "service"
                                    ? "text-black border-t border-black"
                                    : ""
                            } flex justify-center items-center h-full  cursor-pointer`}
                            onClick={() => setActiveTab("service")}
                        >
                            <MdMiscellaneousServices  />
                            <span className="hidden lg:inline-block ml-2">
                                Services
                            </span>
                        </a>

            </div>
            {!loading ?(
            <div className="grid mx-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 lg:gap-8">
                {activeTab == 'post' ?(postList.length !=0 ? (widthSize >= 768 ?postList.filter((post) => post.isBanned === false).map((post) => (
                    <ProfilePost
                        key={post._id}
                        post = {post}
                        handleEvent ={()=>openPost(post)}
                        // showCurrentPost={() => showCurrentPost(post)}
                        // image={post.image}
                    />
                )):
                <div className="bg-white pt-4 w-full px-2">
                    {postList.filter((post) => post.isBanned === false).map((post) => (
                        <OnePost
                            key={post._id}
                            post = {post}
                            handleEvent ={()=>openPost(post)}
                            user={userData}
                            role={'user'}
                            // showCurrentPost={() => showCurrentPost(post)}
                            // image={post.image}
                        />
                    ))}
                </div>):<div className="col-span-3 w-full text-center"> <p className="text-lg text-indigo-900">No posts</p></div>):activeTab == 'service' ?(providerData.services && providerData.services.map((val) => (
                    <Service key={val._id} service={val}/> ))):""}
            </div>):
            <div className="flex h-full items-center justify-center bg-white">
                <Spinner className={'h-28 w-28 '}/>
            </div>
        }

        {singlePost?<SinglePost post={selectedPost} setPostsData={setPostList} setSelectedPost={setSelectedPost} setIOpenPost={setSinglePost} user={userData} role={'user'}/>:''}


        </div>
    )
}

SingleProvider.propTypes = {
    providerData: PropTypes.object.isRequired, // Define the expected type and mark it as required
    setViewProvider:PropTypes.func,
    setSelectedProvider:PropTypes.func
};


export default SingleProvider