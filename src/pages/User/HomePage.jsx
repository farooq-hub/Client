import Home from "../../components/User/Home";
import Sidebar from "../../components/User/Sidebar";

const HomePage = () => {
  
    return (

        <div className=''>
            <Sidebar/>

            <div className='flex md:ml-64 lg:ml-64 bg-white'>
                <Home/>
            </div>
        </div>

    );
};
export default HomePage