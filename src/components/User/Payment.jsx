import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { AiOutlineCheckCircle } from 'react-icons/ai';



const Payment = () => {

    const[pyament,setPayment] = useState(true)
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('status');

    useEffect(()=>{
        if(searchTerm == 'true') setPayment(true)
        else if(searchTerm == 'false') setPayment(false)
    },[])

  return (
    <div className="bg-gray-100 w-full h-screen">
        
        <div className="bg-white p-6  md:mx-auto">
            {!pyament ? <RxCrossCircled className='text-red-600  mx-auto my-6 text-9xl'/> :<AiOutlineCheckCircle className='text-green-600 text-9xl mx-auto my-6'/>}
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                <p> Have a great day!  </p>
                <div className="py-10 text-center">
                    <a href="#" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                        GO BACK 
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment