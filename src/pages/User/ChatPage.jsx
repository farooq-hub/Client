import Sidebar from '../../components/User/Sidebar'
import Chat from '../../components/User/Chat'

const ChatPage = () => {
  return (
    <div className='bg-gray-100 h-screen'>
    <Sidebar />

    <div className="flex md:ml-64 lg:ml-64">
      <Chat/>
    </div>
  </div>
  )
}

export default ChatPage