import Sidebar from "../../components/Provider/Sidebar";


const Home = () => {
    
    return (
        <div className='bg-gray-100 h-screen'>
            <Sidebar />
           
            <div className='flex justify-center '>
                <h1 className='text-5xl'>Provider Home</h1>
            </div>
        </div>
    );
};
export default Home