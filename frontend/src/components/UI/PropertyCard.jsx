import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { CiSettings, CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

PropertyCard.propTypes = {
    propertyDetails: PropTypes.object.isRequired
};

export default function PropertyCard({ propertyDetails }) {
    return (
        <Link className="flex flex-col gap-3 font-Poppins border rounded-lg px-4 py-3 w-96 h-96" to={`/property/propertydetails/${propertyDetails._id}`}>
            <section className="h-[65%] w-full relative overflow-clip">
                <img src={propertyDetails.landlordId.profilePicture} className="w-8 h-8 absolute rounded-full right-0 shadow-lg"/>
                <img src={propertyDetails.propertyPictures[0]} alt="Property Image" className="object-fill rounded-md"/>
            </section>
            <section className="h-[35%] flex flex-col gap-2 w-full items-start">
                <span className="font-semibold">${propertyDetails.price}/week</span>
                <div className="flex gap-2 items-center text-gray-500 w-full">
                    <CiLocationOn/>
                    <div className="flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {propertyDetails.address}
                    </div>
                </div>
                <div className="flex gap-6 items-center text-gray-500">
                    <section className="flex items-center gap-2">
                        <IoBedOutline/>
                        {propertyDetails.bedRoom}
                    </section>
                    <section className="flex items-center gap-2">
                        <TbBath/>
                        {propertyDetails.bathRoom}
                    </section>
                    <div>|</div>
                    <section className="flex gap-2 items-center">
                        <CiSettings/>
                        {propertyDetails.rentalType.rentType}
                    </section>
                </div>
                <section className="text-gray-500 text-sm">
                    {propertyDetails.rentalType.propertyType}
                </section>
            </section>
        </Link>
    );
}
