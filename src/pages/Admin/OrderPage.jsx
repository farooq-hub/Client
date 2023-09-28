import OrderList from '../../components/OrderList'
import Sidebar from '../../components/Admin/Sidebar'

const OrderPage = () => {
  return (
    <div className='bg-gray-100 h-screen'>
    <Sidebar />

    <div className="flex md:ml-64 lg:ml-64">
      <OrderList role='admin'/>
    </div>
  </div>
  )
}

export default OrderPage