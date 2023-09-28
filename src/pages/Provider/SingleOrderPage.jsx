import SingleOrder from '../../components/SingleOrder'
import Sidebar from '../../components/User/Sidebar'


const SingleOrderPage = () => {
  return (
    <div className='bg-gray-100 h-screen'>
        <Sidebar />

    <div className="flex md:ml-64 lg:ml-64">
      <SingleOrder role='provider'/>
    </div>
  </div>
  )
}

export default SingleOrderPage