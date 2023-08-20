import axiosInstance from '../api/axios';
import {  toast } from 'react-toastify';

const usersPost =async (url,formData) => { 
   try {
      console.log(url,formData ,typeof formData);
      const response = await axiosInstance.post(url, formData);
      return response.data        
   } catch (error) {
      if (error.response?.status === 401) {
         toast.error(error?.response?.data?.errMsg)
      } else if (error.response?.status === 402) {
         toast.warn(error?.response?.data?.errMsg)
      }else if (error.response?.status === 504) {
        toast.warn(error?.response?.data?.errMsg)
     } else {
         toast.error(error)
      }
   }
}



export {usersPost,}

