import React from 'react'
import Sidebar from '../../components/User/Sidebar'
import Providers from '../../components/User/Providers'

function ProvidersPage() {
  return (
    <div className='bg-gray-100 h-screen'>
    <Sidebar />
   
    <div className="flex md:ml-64 lg:ml-64">
      <Providers/>
    </div>
</div>
  )
}

export default ProvidersPage