import { useState, useEffect } from 'react';
import PropertyCard from "../../components/UI/PropertyCard";
import { useLoaderData } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import Map from "../../components/UI/Map";

export default function FindRent() {
  const [userLocation, setUserLocation] = useState(null);
  const data = useLoaderData();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        error => {
          console.error('Error getting user location:', error);
          // Handle error if needed
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle unsupported geolocation
    }
  }, []);

  return (
    <>
      <section className="font-Poppins w-full px-20 py-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center border rounded-lg px-4">
          <CiSearch className="text-2xl text-primary" />
          <input
            className="w-full py-2 rounded-lg focus:outline-none"
            placeholder="Search suburbs, street or address"
          />
        </div>
        <div className="flex flex-col sm:gap-4 lg:flex-row justify-evenly">
          <section className="flex flex-col flex-wrap lg:flex-row gap-4 lg:w-[60%] md:w-[60%]">
            {data.properties.length < 1 && <h1>No Properties here</h1>}
            {data?.properties.map((property, index) => (
              <PropertyCard key={index} propertyDetails={property} />
            ))}
          </section>
          {/* Map Section */}
          <section className="lg:w-[40%] md:lg:w-[40%] w-full border rounded-lg h-[600px] lg:sticky md:sticky lg:top-4 md:top-4 overflow-clip">
            {userLocation && <Map location={userLocation} data={data.properties} />}
          </section>
        </div>
      </section>
    </>
  )
}
