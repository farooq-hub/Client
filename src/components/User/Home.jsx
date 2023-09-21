import React, { useEffect, useState } from 'react'
import LoadingPost from '../customComponent/LoadingPost'
import { usersGet } from '../../Services/userApi'
import OnePost from '../OnePost'
import { useSelector } from 'react-redux'
import Button from '../customComponent/Button'
import { SlArrowDown } from 'react-icons/sl'
import Spinner from '../Spinner'
import SinglePost from '../SinglePost'

const Home = () => {

    const [loading,setLoading] = useState()
    const [postList,setPostList] = useState([])
    const [noMore,setMore] = useState(false)
    const [singlePost, setSinglePost] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const userData = useSelector((state) => state.user.userData);

    const getPost =async ({more})=>{
        more ?setLoading('morePost'):setLoading('post')
        await usersGet(`/all-post?skip=${postList.length}`).then((res)=>{
            res.postsList&&!res.noPost?setPostList([...postList,...res.postsList]):''
            res.noPost||res.postsList.length < 10 ?setMore(true):''
            setLoading('')
        })
    }

    const openPost = (post) =>{
        setSinglePost(true)
        setSelectedPost(post)
    }


    useEffect(()=>{
        getPost({more:false})
    },[])
  return (
    <div className='h-96 w-full '>
        <div className="grid mx-2 grid-cols-1 lg:grid-cols-6">
            <div className='flex mt-4 flex-col items-center  lg:col-span-4'>
                {loading == 'post'?
                    [1,2,3].map((val)=><LoadingPost key={1999+val}/>)  
                    :<div className='md:w-[30rem] sm:w-[28rem] w-[21rem]'>
                    {postList.length&&postList.map((post) => (
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
                    <div className='flex justify-center my-4'>
                        {
                            loading == 'morePost'?<Spinner className={'h-12 w-12'}/>
                            :!noMore?
                                <Button className={'text-center '} handelEvent={()=>getPost({more:true})} 
                                    content={<p className='flex items-center text-sm text-blue-600'>Show More<span><SlArrowDown className='text-blue-600 mx-2'/></span></p>}/>:''
                        }
                    </div>
                    </div>}

            </div>
            <div className='border-l  border-gray-100 lg:col-span-2'>

            </div>
        </div>
        {singlePost?<SinglePost post={selectedPost} setPostsData={setPostList} setSelectedPost={setSelectedPost} setIOpenPost={setSinglePost} user={userData} role={'user'}/>:''}
    </div>
  )
}

export default Home