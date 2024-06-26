import { Marker, Popup } from "react-leaflet";

export default function MapMarker({details}) {
  return (
    <Marker position={[details.latitude,details.longitude]}>
        <Popup>
          <div className="flex flex-col gap-2 font-Poppins rounded-lg text-black">
            <section className="w-[200px] h-[100px]">
              <img src={details.propertyPictures[0]} className="w-full h-full object-fill rounded-md"/>
            </section>
              <article>
                {details.address}
              </article>
            <article className="font-semibold">
              ${details.price}/per week
            </article>
          </div>
        </Popup>
    </Marker>
  )
}
