import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Services() {
  const { category } = useParams();  // Get the category from the URL using useParams
  const [services, setServices] = useState([]);
  const [topProviders, setTopProviders] = useState([
    { name: 'Provider 1', image: '/placeholder.svg', rating: 4.9, totalJobs: 420 },
    { name: 'Provider 2', image: '/placeholder.svg', rating: 4.8, totalJobs: 380 },
    { name: 'Provider 3', image: '/placeholder.svg', rating: 4.7, totalJobs: 350 },
  ]);

  useEffect(() => {
    // Fetch services.json dynamically
    fetch('/src/assets/json/services.json')
      .then((response) => response.json())
      .then((data) => {
        // Filter the services by category
        const filteredServices = data.filter(service => service.category.toLowerCase() === category.toLowerCase());
        setServices(filteredServices);
      })
      .catch((error) => console.error('Error fetching services:', error));
  }, [category]); // Re-fetch services when category changes

  return (
    <div className="container">
      {/* <h1 className="page-title">{category} Services</h1> */}

      <section className="section">
        <h2 className="section-title">Services</h2>
        <div className="service-grid">
          {services.length > 0 ? (
            services.map((service, index) => (
              <a href={`/service/${service.name.toLowerCase().replace(' ', '-')}`} key={index} className="service-card">
                <img src={service.image} alt={service.name} width={200} height={200} className="service-image" />
                <p className="service-name">{service.name}</p>
              </a>
            ))
          ) : (
            <p>No services available for this category.</p>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Top Providers</h2>
        <div className="provider-grid">
          {topProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <img src={provider.image} alt={provider.name} width={100} height={100} className="provider-image" />
              <h3 className="provider-name">{provider.name}</h3>
              <div className="provider-rating">
                <span className="star">★</span>
                <span>{provider.rating}</span>
              </div>
              <p className="provider-jobs">{provider.totalJobs} jobs completed</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
