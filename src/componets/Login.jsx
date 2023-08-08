import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdPhoneIphone,MdLockOutline} from 'react-icons/md';

function Login() {

  return (
    <div className='relative w-full  h-screen  bg-slate-100'>
        <div className='flex justify-center items-center h-full '>
            <form action="" className='max-w-[400px] mx-auto w-full  p-8  rounded-lg m-8'>
                {/* <h1 className='text-center text-5xl text-red-950 font-serif border shadow-slate-600'>LOGO</h1> */}
                {/* <h1 className="  font-bold text-2xl  text-red-950 font-serif">LOGO</h1> */}
                <h1 className=" text-center font-bold text-5xl pb-4 pt-2 text-gray-950 font-serif">Sing In</h1>

                <p className="text-center text-sm font-normal text-gray-600 pb-20 ">Welcome Back...</p>

                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
                    <MdPhoneIphone className='h-5 w-5 text-gray-400'/>
                    <input className="pl-2 outline-none border-none h-8 bg-slate-100" type="text" name="" id="" placeholder="Mobile Number"/>
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <MdLockOutline className='h-5 w-5 text-gray-400'/>
                    <input className="pl-2 outline-none border-none h-8 bg-slate-100" type="password" name="" id="" placeholder="Password"/>
                </div>
                <div className='flex justify-between mb-4'>
                    {/* <p className='flex items-center'><input className='mr-2' type="checkbox" />rememmber me</p> */}

                    <p className='font-semibold text-gray-500 hover:underline'> <Link className="lo-sign" to="/signup">Login with OTP</Link></p>
                    <p className='font-semibold text-gray-500 hover:underline'> <Link className="lo-sign" to="/signup">Forgot password?</Link></p>

                </div>
                <div className='flex justify-center'>
                    <button className='border-none rounded-full my-5 w-44 h-12 transition duration-300 text-white font-bold bg-black py-2 hover:bg-gray-400'>Login</button>
                </div>
                <div className="flex justify-center">
                <p>Don&rsquo;t you have account..?</p>
                    <p className='font-semibold text-blue-800 hover:underline'> <Link className="lo-sign" to="/register">&nbsp;Sign Up</Link></p>
                </div>
            </form>
        </div>
    </div>
  );
}


// Add prop validation
Login.propTypes = {
    Role: PropTypes.string.isRequired,
  };

export default Login