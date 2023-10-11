import { useLocation } from 'react-router-dom';
import Sidebar from '../../Components/User/Sidebar';
import Profile from '../../Components/User/profile';
import { useEffect } from 'react';

function ProfilePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile' && location.hash === '#transationHistory') {
      setTimeout(() => {
        const targetDiv = document.getElementById('transationHistory');
        if (targetDiv) {
          window.scrollTo({ behavior: 'smooth', top: document.body.scrollHeight });
        }
      }, 100); // Adjust the delay as needed
    }
  }, [location.pathname, location.hash]);


  return (
    <div className='h-screen'>
      <Sidebar />

      <div className="flex md:ml-64 lg:ml-64">
        <Profile/>
      </div>

      {/* <div className=" bg-gray-200 shadow-sm p-4">
        <h1 className="text-xl font-serif text-center text-gray-800 capitalize lg:text-2xl">ORDERS</h1>
      </div> */}

    </div>
  )
}

export default ProfilePage