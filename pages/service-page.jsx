import { useParams } from 'react-router-dom';
import { Star, Clock, DollarSign } from 'lucide-react';
import servicesData from '../src/assets/json/services.json';

export default function ServicePage() {
  const { serviceId } = useParams(); // Get the `serviceId` from URL params
  const service = servicesData.find(s => s.id === parseInt(serviceId));

  console.log(serviceId);
  if (!service) return <p>Service not found</p>;

  const { title, description, image, rating, duration, price, features, breadcrumbs } = service;

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-6">
        <ol className="list-none p-0 inline-flex">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-500">/</span>}
              {crumb.href ? (
                <a href={crumb.href} className="text-blue-500 hover:text-blue-600">
                  {crumb.text}
                </a>
              ) : (
                <span className="text-gray-700">{crumb.text}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="service-image-container">
          <img src={image} alt={title} width={600} height={400} className="rounded-lg shadow-md" />
          <div className="service-meta mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" />
              <span>{rating} (124 reviews)</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="mr-1" />
              <span>{price}</span>
            </div>
          </div>
        </div>
        
        <div className="service-info">
          <p className="text-gray-600 mb-6">{description}</p>
          <h2 className="text-xl font-semibold mb-4">What's included:</h2>
          <ul className="list-disc pl-5 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
          <a
            href="/book-service"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
