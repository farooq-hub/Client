import axiosInstance from '../api/axios';
import {  toast } from 'react-toastify';

const providerPost =async (url,formData) => { 
   try {
      console.log('/provider'+ url,formData ,typeof formData);
      const response = await axiosInstance.post('/provider' + url, formData);
      return response.data        
   } catch (error) {
      if (error.response?.status === 401) {
         toast.error(error?.response?.data?.errMsg)
      } else if (error.response?.status === 402) {
         toast.warn(error?.response?.data?.errMsg)
      }else if (error.response?.status === 504) {
        toast.warn(error?.response?.data?.errMsg)
     }else if (error.response?.status === 500) {
      console.log(error.response?.data.errMsg);
      toast.warn(error?.response?.data?.errMsg)
   } else {
      
         toast.error(error)
      }
   }
}



export {providerPost,}

