import Sidebar from '../../components/User/Sidebar'
import Profile from '../../components/User/profile'


function ProfilePage() {
  return (
    <div className='bg-gray-100 h-screen'>
    <Sidebar />
   
    <div className="flex md:ml-64 lg:ml-64">
      <Profile/>
    </div>
</div>
  )
}

export default ProfilePage