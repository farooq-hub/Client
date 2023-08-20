import axiosInstance from '../api/axios';
import {  toast } from 'react-toastify';
// import { persistor } from '../store/store';


// Assuming you want to access the 'admin' slice of the state
// const persistedAdminState = persistor.getState().providerAuth;

// console.log('Persisted Admin State:', persistedAdminState)
// const storedAdmin = localStorage.getItem('adminAuth');

const adminPost =async (url,formData) => { 
   try {
      console.log('/provider'+ url,formData ,typeof formData);
      const response = await axiosInstance.post('/admin'+ url, formData);
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

// console.log(storedAdmin,'fhjdgksksjfhgasefky')

const adminPatch =async (url,formData,token) => { 
   try {

      console.log('/provider'+ url,formData ,typeof formData);
      const response = await axiosInstance.patch('/admin'+ url, formData,{
         headers: {
             Authorization: `Bearer ${token}`,
         }});
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




export {adminPost,adminPatch}

