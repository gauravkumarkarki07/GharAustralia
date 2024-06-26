import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiRequest from '../../services/api/ApiRequest';
import { TbBath } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import Map from '../../components/UI/Map.jsx';
import Button from '../../components/UI/Button.jsx';


export default function PropertyDetails() {
  const { propertyId } = useParams();
  const { GetRequest } = ApiRequest();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await GetRequest(`/ghar/property/propertydetails/${propertyId}`);
        setData(()=>(response.propertyDetails));

    };

      fetchData();
    
    }, [propertyId]);
  
    if(!data){
      return <h1>Loading...</h1>
    }

  return (
    <div className='font-Poppins text-lg flex flex-col gap-6'>
      <section className='flex w-full gap-4 px-28 py-2 h-[380px]'>
        <div className='w-[50%] h-full'>
          <div className='overflow-clip h-full rounded-lg'>
            <img src={data.propertyPictures[0]} className='object-cover w-full h-full'/>
          </div>
        </div>
        <div className='w-[50%] h-full'>
          <div className='overflow-clip h-full rounded-lg'>
            <img className='object-cover w-full h-full' src={data.propertyPictures[0]}/>
          </div>
        </div>
      </section>
      <section className='flex w-full px-28 justify-between'>
        <div className='flex flex-col gap-4 w-[50%]'>
          <article className='text-2xl font-semibold font-Archivo flex items-center gap-2'>
            <CiLocationOn/>
            {data.address}
          </article>
          {/* Icon Details */}
          <div className='border rounded-lg w-full px-8 py-4 text-primary'>
              <section className='flex justify-around'>
                <div>
                  <div className='flex gap-1 items-center'>
                    <CiDollar/>
                    <span className='text-sm'>/week</span>
                  </div>
                  {data.price}
                </div>
                <div>
                  <IoBedOutline/>
                  {data.bedRoom}
                </div>
                <div>
                  <TbBath/>
                  {data.bathRoom}
                </div>
                <div>
                  <CiSettings/>
                  {data.rentalType.rentType}
                </div>
              </section>
          </div>
          {/* Description */}
          <div className='flex flex-col gap-1'>
            <h2 className='font-semibold'>Description</h2>
            <article className='text-gray-500 text-base'>
              {data.description}
            </article>
          </div>
        </div>
        {/* Landlord Message */}
        <div className='px-4 w-[50%]'>
          <section className='flex flex-col px-4 py-4 border rounded-lg w-full gap-3'>
            <h2 className='text-2xl font-Archivo font-semibold'>Landlord Details</h2>
            <article>
            <div className='flex items-center gap-2 text-base text-gray-500'>
              <img src={data.landlordId.profilePicture} className='w-8 h-8 rounded-full object-cover'/>
              <article className='flex gap-2'>
                <span>{data.landlordId.firstName}</span>
                <span>{data.landlordId.lastName}</span>
              </article>
            </div>
          </article>
          <textarea
            placeholder='Message me for more details'
            className='rounded-lg px-4 py-2 bg-gray-100'
          />
          <Button>
            Message Me
          </Button>
          </section>
        </div>
      </section>
      {/* Map Section */}
      <section className='px-28 w-full h-[600px] overflow-clip mb-12'>
        <h2 className='text-2xl font-Archivo font-semibold pb-4'>Location Information</h2> 
         <section className="w-full h-full">
              <Map location={{latitude:data.latitude,longitude:data.longitude}} data={data}/>
          </section>
      </section>
    </div>
  );
}
