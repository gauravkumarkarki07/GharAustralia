import { useLoaderData } from 'react-router-dom';
import PropertyCard from '../../components/UI/PropertyCard';
import Map from '../../components/UI/Map';

export default function ListedProperty() {
  const listedProperty = useLoaderData();

  // Extract the location of the first property in the list
  const firstPropertyLocation = listedProperty.propertyList[0]
    ? {
        latitude: listedProperty.propertyList[0].latitude,
        longitude: listedProperty.propertyList[0].longitude,
      }
    : null;

  return (
    <div className="px-28 py-4 font-Poppins text-lg flex flex-col gap-4 w-full">
      <section className="flex flex-col gap-2 bg-primary rounded-lg px-8 py-6 text-white">
        <h1 className="font-Archivo text-4xl font-semibold text-black">Listed properties</h1>
        <article>Manage your listed properties</article>
      </section>
      <section className="flex flex-row justify-between">
        <div className="flex justify-between w-[60%] flex-wrap">
          {listedProperty.propertyList.map((property, index) => (
            <PropertyCard key={index} propertyDetails={property} />
          ))}
        </div>
        {firstPropertyLocation && (
          <section className="lg:w-[40%] md:lg:w-[40%] w-full border rounded-lg h-[600px] lg:sticky md:sticky lg:top-4 md:top-4 overflow-clip">
            <Map
              location={firstPropertyLocation}
              data={listedProperty.propertyList}
            />
          </section>
        )}
      </section>
    </div>
  );
}
