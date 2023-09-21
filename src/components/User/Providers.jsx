import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { usersGet } from "../../Services/userApi";
import profilAvadar from "../../assets/istockphoto-1316420668-612x612.jpg"
import coverPic from "../../assets/pexels-sandra-filipe-7087668.jpg"
import SingleProvider from "./SingleProvider";

// import Select from 'react-select';



const  Providers = ()=> {


        const [providers, setProviders] = useState([]);
        const [viweProvider, setViewProvider] = useState(false);
        const [selectedProvider, setSelectedProvider] = useState({});

        // const navigate = useNavigate();
        const [searchText, setSearchText] = useState('');

        const fetchProviders = async () => {
            try {
                await usersGet('/providersList').then((res)=>{
                    setProviders(res.providersData);
                }).catch((error)=>{
                    console.log(error);
                })
    
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(() => {
            fetchProviders()
        }, []);
    
        


        // const keralaDistricts = [
        //     "All",
        //     "Alappuzha",
        //     "Ernakulam",
        //     "Idukki",
        //     "Kannur",
        //     "Kasaragod",
        //     "Kollam",
        //     "Kottayam",
        //     "Kozhikode",
        //     "Malappuram",
        //     "Palakkad",
        //     "Pathanamthitta",
        //     "Thiruvananthapuram",
        //     "Thrissur",
        //     "Wayanad",
        // ];

        // const keralaDistrictsOptions = keralaDistricts.map((district) => ({
        //     value: district,
        //     label: district,
        // }));
    
    
        return (
            <>
            { viweProvider? <SingleProvider providerData={selectedProvider} setViewProvider={setViewProvider} setSelectedProvider={setSelectedProvider}/>:
                <section className="w-full ">
                    <div className="">
                        <div className=" bg-gray-200 shadow-sm  pt-8 pb-10">
                            <h1 className="text-2xl mb-8 font-serif text-center text-gray-800 capitalize lg:text-4xl">PROVIDERS</h1>
                            <p className="max-w-2xl mx-auto mb-3 font-medium text-center text-gray-500 ">
                                Discover service providers that meet your criteria and connect with them through messaging to place your orders.
                            </p>
                        </div>
                        {providers.length != 0?
                            <div className="md:flex  md:ml-0 overflow-hidden">
                                <div className="mt-8 md:ml-6 mx-auto md:w-72 w-56">
                                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                        <input
                                            type="search"
                                            className="relative h-10 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                                            placeholder="Search Provid.."
                                            aria-label="Search"
                                            aria-describedby="button-addon1"
                                            value={searchText}
                                            onChange={(event) => setSearchText(event.target.value.toLocaleLowerCase())}
                                        />
                                    </div>
                                </div>
                            </div>
                        :''}
                        <hr />
                        <div className={`${providers?.length && providers?.length != 0 ?'grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 px-6 py-10 gap-8':'w-full' }`}>
                            {providers?.length && providers?.length != 0 ? (
                                    providers.filter((provider) => provider.name.includes(searchText)).map((provider) => (
                                    <div key={provider._id} className=" max-w-2xl mx-4 sm:max-w-md sm:mx-auto cursor-pointer transition-colors duration-300  bg-white hover:bg-slate-800 hover:text-gray-100 shadow-xl rounded-lg text-gray-900 p-8"
                                        onClick={()=>{
                                            setViewProvider(true)
                                            setSelectedProvider(provider)
                                        }}
                                    >
                                        <div className="rounded-t-lg h-32 overflow-hidden">
                                            <img className="object-cover object-top w-full" src={provider.coverPic ? provider.coverPic : coverPic } alt='Mountain'/>
                                        </div>
                                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                            <img className="object-cover object-center h-32" src={provider.profilePic ? provider.profilePic : profilAvadar } alt='loading..'/>
                                        </div>
                                        <div className="flex-row items-center text-center mt-2">
                                            <h2 className="font-semibold mb-2 uppercase">{provider.name}</h2>
                                            <p className="text-center text-gray-500 px-12 ">{provider.description?provider.description:'Servies provider'}</p>
                                        </div>
                                        <div className="p-4 border-t mx-8 mt-2">
                                            <button className=" block mx-auto rounded-full bg-gray-500 hover:shadow-lg font-semibold text-white px-6 py-2" >Details</button>
                                        </div>
                                    </div>
                                ))
                                ):
                                (<div className=" bg-gray-100 shadow-sm  pt-8 pb-10">
                                    <p className="max-w-2xl mx-auto mb-3 font-medium text-center text-red-800 ">
                                        Looding.........!
                                    </p>
                                </div>)
                            }

                        
                        </div>
                            {/* <div className="rounded-md bg-slate-300 p-4 max-w-sm "> */}

{/* 
                            <div className="flex rounded-md items-center  flex-col justify-end max-w-sm transition-all h- duration-300 cursor-pointer bg-slate-300" 
                                // style={{ backgroundImage: `url(${`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png`})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                <img className="w-40  grayscale-0  h-40 bg-slate-200 p-2 mb-4 rounded-full object-center shadow-lg" src={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png`}  alt="loading..."/>
                            </div>
                                <div className="text-center rounded-md text-lg bg-gray-700  text-white ">
                                    <h2 className="mt-2">lll</h2>
                                    <p>Do you want to get notified when a new component is added to Flowbite?</p>
                                    <button className="w-12 h-8 rounded-md bg-black mb-2">lll</button>
                                </div>
                            </div> */}



                            {/* <div classNameName="flex rounded-md items-center  flex-col justify-end max-w-sm transition-all h-80 duration-300 cursor-pointer " 
                                style={{ backgroundImage: `url(${`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png`})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <img className="w-40  grayscale-0  h-40 bg-slate-200 p-2 mb-1 rounded-full object-center shadow-lg" src={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png`}  alt="loading..."/>
                                <div className="text-center rounded-md text-lg bg-gray-700  text-white ">
                                    <h2 className="mt-2">lll</h2>
                                    <p>Do you want to get notified when a new component is added to Flowbite?</p>
                                    <button className="w-12 h-8 rounded-md bg-black mb-2">lll</button>
                                </div>
                            </div>
                            <div className="flex rounded-md items-center  flex-col justify-end max-w-sm transition-all h-80 duration-300 cursor-pointer " 
                                style={{ backgroundImage: `url(${`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png`})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <img className="w-40  grayscale-0  h-40 bg-slate-200 p-2 mb-1 rounded-full object-center shadow-lg" src={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png`}  alt="loading..."/>
                                <div className="text-center rounded-md text-lg bg-gray-700  text-white ">
                                    <h2 className="mt-2">lll</h2>
                                    <p>Do you want to get notified when a new component is added to Flowbite?</p>
                                    <button className="w-12 h-8 rounded-md bg-black mb-2">lll</button>
                                </div>
                            </div>
                        */}
                        {/* <SortProvider setSelectedServiceId={setSelectedServiceId} selectedService={selectedService} setSelectedService={setSelectedService} searchText={searchText} selectedOptions={selectedOptions} setSearchText={handleSearch} handleChange={handleSelectChange} /> */}



                    

{/* 
                            {

                                providers.filter((provider) => provider.name.toLowerCase().includes(searchText))
                                    .map((provider) => {
                                        return (
                                            // <div key={provider._id} className="flex flex-col items -center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-indigo-500 -border-gray-700 -hover:border-transparent " onClick={() => navigate(`/user/provider/${provider._id}`)}>
                                            //     <div className="w-full h-40" style={{ backgroundImage: `url(${provider?.coverPic})`, backgroundSize: 'cover' }}>

                                            //         <div className="avatar">
                                            //             <div className="w-20 mt-3 ml-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            //                 <img src={provider?.profilePic} />
                                            //             </div>
                                            //         </div>
                                            //     </div>
                                            //     <div className="mt-4 flex text-2xl font-semibold text-gray-700 capitalize -text-white group-hover:text-white">
                                            //         <h1>{provider?.name}</h1>
                                            //         {
                                            //             provider?.isUpgraded ?
                                            //                 <p className="mt-1.5 ml-1 tooltip" data-tip='verified badge'>
                                            //                     <svg width="20" height="24" strokeWidth="1.5"
                                            //                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor">
                                            //                         <path d="M10.5213 2.62368C11.3147 1.75255 12.6853 1.75255 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2475 11.3147 22.2475 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2475 11.3147 22.2475 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41553 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75255 12.6853 1.75255 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41553C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z"
                                            //                             stroke="#ffffff" strokeWidth="0"
                                            //                             id="mainIconPathAttribute" fill="blue">
                                            //                         </path> <path d="M9 12L11 14L15 10"
                                            //                             stroke="#ffffff" strokeLinecap="round"
                                            //                             strokeLinejoin="round" id="mainIconPathAttribute"
                                            //                             fill="blue"></path> </svg>
                                            //                 </p>
                                            //                 : null
                                            //         }

                                            //     </div>

                                            //     <p className="mt-2 text-gray-500 capitalize group-hover:text-white">{provider?.description}</p>

                                            //     <div className="flex mt-3 -mx-2 ">


                                            //         <p className="mx-2 text-white d btn btn-sm bg-indigo-500  group-hover:text-indigo-500 group-hover:bg-white font-bold " onClick={() => handleMessage(provider?._id)}>
                                            //             MESSAGE
                                            //         </p>


                                            //     </div>
                                            // </div>
                                        )
                                    })} */}

                    </div>
                </section>
            }
            </>
        )
    }


export default Providers