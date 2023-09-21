import Options from '../../components/Provider/Options'
import Sidebar from '../../components/Provider/Sidebar'

const OptionPage = () => {
  return (

    <div className='bg-gray-100 h-screen'>
    <Sidebar />
   
    <div className="flex md:ml-64 lg:ml-64">
      <Options/>
    </div>
</div>
  )
}

export default OptionPage