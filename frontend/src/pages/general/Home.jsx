import { Link } from 'react-router-dom';
import PropertyCard from '../../components/UI/PropertyCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

  const propertList=useLoaderData();

  return (
    <div className="font-Poppins bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6">Find Your Dream Home</h1>
            <p className="text-lg text-gray-700 mb-8">Discover properties for sale or rent in your desired location.</p>
            <Link to="/tenant" className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg inline-block transition duration-300 ease-in-out">Explore Properties</Link>
          </div>
          
          {/* Right Column */}
          <div className="flex justify-center">
            <img src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Home Image" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="container mx-auto py-12 px-4 lg:px-8 bg-gray-200">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Cards */}
          {propertList.properties.slice(0,3).map((property,index)=>(
            <PropertyCard key={index} propertyDetails={property}/>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-12 px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-2">Property Management</h3>
            <p className="text-gray-700 mb-4">Professional management services for your rental properties.</p>
            <Link to="/services/property-management" className="text-primary hover:underline">Learn More</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-2">Real Estate Consultation</h3>
            <p className="text-gray-700 mb-4">Expert consultation to help you find the perfect property.</p>
            <Link to="/services/real-estate-consultation" className="text-primary hover:underline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-12 px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <blockquote className="text-lg text-gray-700 mb-4">We found our dream home through Ghar.Home. The service was exceptional and the process was seamless.</blockquote>
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-600">New Homeowner</p>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <blockquote className="text-lg text-gray-700 mb-4">Great experience working with Ghar.Home. They understood our needs and helped us find the perfect rental property.</blockquote>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-600">Renter</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-12 px-4 lg:px-8 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-lg mb-8">Get started today and explore our available properties.</p>
          <Link to="/tenant" className="bg-white text-primary py-3 px-6 rounded-lg inline-block hover:bg-primary-light transition duration-300 ease-in-out">Explore Properties</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
