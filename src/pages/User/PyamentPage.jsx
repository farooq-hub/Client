import Sidebar from '../../components/User/Sidebar'
import Providers from '../../components/User/Providers'
import Payment from '../../components/User/Payment'

function PyamentPage() {
  return (
    <div className='bg-gray-100 h-screen'>
    <Sidebar />
   
    <div className="flex md:ml-64 lg:ml-64">
      <Payment/>
    </div>
</div>
  )
}

export default PyamentPage