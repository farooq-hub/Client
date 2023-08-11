import Sidebar from "../../components/Admin/Sidebar";
import ProviderList from "../../components/Admin/ProviderList";

const Provider = () => {
    return (
        <div className='bg-gray-100 h-full min-h-screen min-w-screen font-sans overflow-hidden'>
            <Sidebar />


            <div className="flex md:ml-64 lg:ml-64 ">
                <ProviderList />
            </div>
        </div>
    )
}

export default Provider;