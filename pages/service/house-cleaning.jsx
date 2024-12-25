import ServicePage from '../../components/service-page'

export default function HouseCleaningService() {
  return (
    <ServicePage
      title="Professional House Cleaning Services"
      description="Our experienced cleaning team will make your home sparkle from top to bottom. We use eco-friendly cleaning products and pay attention to every detail to ensure your complete satisfaction."
      image="/placeholder.svg"
      rating={4.9}
      duration="2-4 hours"
      price="Starting at $100"
      features={[
        "Deep cleaning of all rooms",
        "Dusting and wiping of all surfaces",
        "Vacuuming and mopping of floors",
        "Bathroom and kitchen sanitization",
        "Window cleaning",
        "Laundry and linen change (optional)"
      ]}
      breadcrumbs={[
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' },
        { text: 'House Cleaning', href: null }
      ]}
    />
  )
}

