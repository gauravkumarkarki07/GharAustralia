import { TileLayer, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import MapMarker from "./MapMarker";
import PropTypes from 'prop-types';

Map.propTypes = {
  location: PropTypes.object,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default function Map({ location, data }) {
  const isArray = Array.isArray(data);
  const zoomLevel = isArray ? 10 : 20;

  return (
    <div id="map" className="w-full h-full">
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={zoomLevel}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {isArray ? (
          data.map((property, index) => (
            <MapMarker 
              key={index} 
              geoLocation={{ latitude: property.latitude, longitude: property.longitude }} 
              details={property} 
            />
          ))
        ) : (
          <MapMarker 
            geoLocation={{ latitude: data.latitude, longitude: data.longitude }} 
            details={data} 
          />
        )}
      </MapContainer> 
    </div>
  );
}
