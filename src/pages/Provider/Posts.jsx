import Post from "../../components/Provider/PostList";
import Sidebar from "../../components/Provider/Sidebar";


const PostPage = () => {
    
    return (

        <div className='bg-gray-100 h-screen'>
            <Sidebar />
           
            <div className="flex md:ml-64 lg:ml-64">
              <Post/>
            </div>
        </div>

    );
};
export default PostPage