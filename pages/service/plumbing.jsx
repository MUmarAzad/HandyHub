import ServicePage from '../../components/service-page'

export default function PlumbingService() {
  return (
    <ServicePage
      title="Professional Plumbing Services"
      description="Our expert plumbers are ready to tackle any plumbing issue, from minor leaks to major pipe repairs. We use state-of-the-art equipment and techniques to ensure your plumbing system runs smoothly and efficiently."
      image="/placeholder.svg"
      rating={4.8}
      duration="1-2 hours"
      price="Starting at $80"
      features={[
        "Leak detection and repair",
        "Pipe installation and replacement",
        "Drain cleaning and unclogging",
        "Water heater maintenance and installation",
        "Fixture installation (sinks, toilets, showers)",
        "24/7 emergency services"
      ]}
      breadcrumbs={[
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' },
        { text: 'Plumbing', href: null }
      ]}
    />
  )
}

