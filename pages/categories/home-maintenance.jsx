


const services = [
  { name: 'Plumbing', image: '/placeholder.svg' },
  { name: 'Carpentry', image: '/placeholder.svg' },
  { name: 'HVAC', image: '/placeholder.svg' },
  { name: 'Electrical Repairs', image: '/placeholder.svg' },
]

const topProviders = [
  { name: 'John Doe', image: '/placeholder.svg', rating: 4.8, totalJobs: 150 },
  { name: 'Jane Smith', image: '/placeholder.svg', rating: 4.9, totalJobs: 200 },
  { name: 'Mike Johnson', image: '/placeholder.svg', rating: 4.7, totalJobs: 180 },
]

export default function HomeMaintenance() {
  return (
    <div className="container">
      <h1 className="page-title">Home Maintenance</h1>

      <section className="section">
        <h2 className="section-title">Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <a href={`/service/${service.name.toLowerCase().replace(' ', '-')}`} key={index} className="service-card">
              <img src={service.image} alt={service.name} width={200} height={200} className="service-image" />
              <p className="service-name">{service.name}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Top Services</h2>
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
  )
}

