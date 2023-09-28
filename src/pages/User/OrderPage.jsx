import Sidebar from '../../components/User/Sidebar'
import OrderList from '../../components/OrderList'

const OrderPage = () => {
  return (
    <div className='bg-gray-100 h-screen'>
    <Sidebar />

    <div className="flex md:ml-64 lg:ml-64">
      <OrderList role='user'/>
    </div>
  </div>
  )
}

export default OrderPage