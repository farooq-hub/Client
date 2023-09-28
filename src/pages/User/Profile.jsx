import { AiOutlineArrowRight } from 'react-icons/ai';
import OrderList from '../../components/OrderList'
import Sidebar from '../../components/User/Sidebar'
import Profile from '../../components/User/profile'
import Button from "../../components/customComponent/Button";
import { useNavigate } from 'react-router-dom';


function ProfilePage() {

  const navigate = useNavigate()

  return (
    <div className='bg-gray-100 h-screen'>
      <Sidebar />

      <div className="flex md:ml-64 lg:ml-64">
        <Profile/>
      </div>
      <div className="md:ml-64 lg:ml-64">
        <OrderList role='user' path='/profile'/>
        <div className="flex bg-gray-100  items-center justify-center p-4 w-full">
          <Button handelEvent={()=>navigate('/orders')} className={'text-center my-8 animate-bounce text-blue-800 text-[1rem] '} content={<p className='flex items-center '>See More<span><AiOutlineArrowRight className='text-blue-600 mx-2'/></span></p>}/>
        </div>
      </div>
      {/* <div className=" bg-gray-200 shadow-sm p-4">
        <h1 className="text-xl font-serif text-center text-gray-800 capitalize lg:text-2xl">ORDERS</h1>
      </div> */}

    </div>
  )
}

export default ProfilePage