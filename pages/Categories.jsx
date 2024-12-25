// import { Link } from ReactDOM;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/categories.css';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState({ discounted: []});
  const location = useLocation();

  useEffect(() => {
    
    fetch('../src/assets/json/categories.json')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));

    fetch('../src/assets/json/services.json')
      .then((response) => response.json())
      .then((data) => {
        const discounted = data.filter((service) => service.discounted);
        setServices({ discounted });
      })
      .catch((error) => console.error('Error fetching services:', error));
  }, [location]);

  return (
    <div className="container-cat">
      <section className="section hero-cat">
        <h1 className="section-title">Explore Our Services</h1>
        <p className="hero-description">Find the perfect service for your needs</p>
      </section>

      <section className="section">
        <h2 className="section-title">Categories</h2>
        <div className="grid grid-cat">
          {categories.map((category, index) => (
            <a href={category.link} key={index} className="card">
              <img
                src={category.image}
                alt={category.name}
                width={200}
                height={200}
                className="card-image"
              />
              <p className="card-title">{category.name}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Discounted Services</h2>
        <div className="grid grid-cat">
          {services.discounted.map((service, index) => (
            <a href={service.link} key={index} className="card">
              <img
                src={service.image}
                alt={service.name}
                width={200}
                height={200}
                className="card-image"
              />
              <p className="card-title">{service.name}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}