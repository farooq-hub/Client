import Dashboard from '../../Components/Admin/Dashboard';
import Sidebar from '../../Components/Admin/Sidebar';


const Home = () => {
  
    return (

        
         <div className='bg-gray-100 h-screen'>
            <Sidebar />
            
           
            <div className='md:ml-64 lg:ml-64 '>
                <Dashboard/>
            </div>
        </div>

    );
};
export default Home