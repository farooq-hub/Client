import Checkout from "../../components/User/CheckoutPage";
import Sidebar from "../../components/User/Sidebar";

const CheckoutPage = () => {
  console.log('skjfgkjsgkjg');
    return (

        <div className=''>
            <Sidebar/>

            <div className='flex md:ml-64 lg:ml-64 bg-white'>
                <Checkout/>
            </div>
        </div>

    );
};
export default CheckoutPage