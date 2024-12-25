

export default function AboutUs() {
  return (
    <div className="container">
      <h1 className="page-title">About HandyHub</h1>
      
      <section className="section">
        <div className="grid">
          <div>
            <h2 className="section-title">Our Mission</h2>
            <p>At HandyHub, we're on a mission to revolutionize the way people access and provide home services. We believe in creating a platform that connects skilled professionals with homeowners, making it easier than ever to get things done around the house.</p>
          </div>
          <div>
            <img src="/placeholder.svg" alt="HandyHub Mission" width={400} height={300} className="about-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li>
            <h3>Quality</h3>
            <p>We're committed to providing top-notch services through our vetted professionals.</p>
          </li>
          <li>
            <h3>Reliability</h3>
            <p>You can count on us to deliver services on time, every time.</p>
          </li>
          <li>
            <h3>Transparency</h3>
            <p>We believe in clear communication and upfront pricing.</p>
          </li>
          <li>
            <h3>Innovation</h3>
            <p>We're always looking for ways to improve and streamline our services.</p>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="team-member">
              <img src="/placeholder.svg" alt={`Team Member ${i}`} width={200} height={200} className="team-member-image" />
              <h3>John Doe</h3>
              <p>Co-founder & CEO</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

