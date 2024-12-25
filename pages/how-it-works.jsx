// import a from 'next/link'

export default function HowItWorks() {
  return (
    <div className="container">
      <h1 className="page-title">How HandyHub Works</h1>
      
      <section className="section">
        <h2 className="section-title">Simple Steps to Get Started</h2>
        <ol className="steps-list">
          <li>
            <h3>Sign Up</h3>
            <p>Create your account on HandyHub to access our wide range of services.</p>
          </li>
          <li>
            <h3>Choose a Service</h3>
            <p>Browse through our categories and select the service you need.</p>
          </li>
          <li>
            <h3>Book a Professional</h3>
            <p>Pick a time slot and book a vetted professional for your job.</p>
          </li>
          <li>
            <h3>Get the Job Done</h3>
            <p>The professional will arrive at your location and complete the task.</p>
          </li>
          <li>
            <h3>Pay and Review</h3>
            <p>Once the job is done, pay through our secure platform and leave a review.</p>
          </li>
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose HandyHub?</h2>
        <ul className="features-list">
          <li>Vetted and skilled professionals</li>
          <li>Secure and easy payment system</li>
          <li>24/7 customer support</li>
          <li>Satisfaction guarantee</li>
          <li>Flexible scheduling</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Ready to Get Started?</h2>
        <p>Join HandyHub today and experience hassle-free home services!</p>
        <div className="button-group">
          <a href="/signup" className="button primary">Sign Up Now</a>
          <a href="/categories" className="button secondary">Explore Services</a>
        </div>
      </section>
    </div>
  )
}

