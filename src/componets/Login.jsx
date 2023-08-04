// import React from 'react'

function Login(props) {

  return (
    <div className='relative w-full  h-screen bg-zinc-500/90'>
        <div className='bg-slate-500 flex flex-col justify-center'>
            <form action="" className='max-w-[400px] mx-auto w-full bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>{props.Role}</h2>
                <div className='flex flex-col py-2 text-center'>
                    <label htmlFor="">Username</label>
                    <input type="text" className='border p-2 text-center'/>
                </div>
                <div className='flex flex-col py-2 text-center'>
                    <label htmlFor="">password</label>
                    <input type="text" className='border p-2 text-center'/>
                </div>
                <div className='flex justify-center'>
                    <button className='border my-5 w-6/12 transition duration-500 text-white bg-slate-800 py-2 hover:bg-slate-300 hover:text-black'>Login</button>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" />rememmber me</p>
                    <p>creat acount</p>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Login