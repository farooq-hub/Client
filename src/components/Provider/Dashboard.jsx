import DashboardCards from "../DashboardCards"
import { MdWorkHistory } from "react-icons/md"


const Dashboard = () => {

  return (
    <>
        <div className="w-full grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-md ">
                <DashboardCards icon={<MdWorkHistory className="text-gray-300"/>}/>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-md ">
                <DashboardCards icon={<MdWorkHistory className="text-gray-300"/>}/>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-md ">
                <DashboardCards icon={<MdWorkHistory className="text-gray-300"/>}/>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-md ">
                <DashboardCards icon={<MdWorkHistory className="text-gray-300"/>}/>
            </div>
        </div> 

    </>
  )
}

export default Dashboard