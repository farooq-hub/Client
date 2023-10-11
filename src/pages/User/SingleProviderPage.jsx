import React from 'react'
import Sidebar from '../../components/User/Sidebar'
import SingleProvider from '../../components/User/SingleProvider'

const SingleProviderPage = () => {
  return (
    <div className='bg-gray-100 h-screen'>
        <Sidebar />
   
        <div className="md:ml-64 lg:ml-64">
            <SingleProvider/>
        </div>
    </div>

  )
}

export default SingleProviderPage