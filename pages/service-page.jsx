import { useParams, useLocation } from 'react-router-dom';
import { Star, Clock, DollarSign } from 'lucide-react';
import servicesData from '../src/assets/json/services.json';
import Breadcrumbs from '../components/Breadcrumbs';
import '../styles/service.css';

export default function ServicePage() {
  const { serviceName } = useParams();
  const location = useLocation();
  const service = servicesData.find(s => s.name.toLowerCase() === serviceName);

  if (!service) return <p>Service not found</p>;

  const { title, description, image, rating, duration, price, features } = service;

  return (
    <div className="service-page">
      <Breadcrumbs location={location} />

      <h1 className="service-page__title">{title}</h1>

      <div className="service-page__content">
        <div className="service-image-container">
          <img src={image} alt={title} className="service-image-container__img" />
          <div className="service-meta">
            <div className="service-meta__item">
              <Star className="service-meta__icon service-meta__icon--star" />
              <span>{rating} (124 reviews)</span>
            </div>
            <div className="service-meta__item">
              <Clock className="service-meta__icon" />
              <span>{duration}</span>
            </div>
            <div className="service-meta__item">
              <DollarSign className="service-meta__icon" />
              <span>{price}</span>
            </div>
          </div>
        </div>

        <div className="service-info">
          <p className="service-info__description">{description}</p>
          <h2 className="service-info__subtitle">What's included:</h2>
          <ul className="service-info__features">
            {features.map((feature, index) => (
              <li key={index} className="service-info__feature">{feature}</li>
            ))}
          </ul>
          <a href="/book-service" className="book-now-button">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

