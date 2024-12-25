export default function Contact() {
  return (
    <div className="container">
      {/* <h1 className="page-title">Contact Us</h1> */}
      
      <section className="section">
        <h2 className="section-title">Get in Touch</h2>
        <p>We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us.</p>
        
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" required className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" required className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" name="subject" required className="form-input" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" required className="form-textarea"></textarea>
          </div>
          
          <button type="submit" className="button primary">Send Message</button>
        </form>
      </section>

      <section className="section">
        <h2 className="section-title">Other Ways to Reach Us</h2>
        <div className="contact-info">
          <div>
            <h3>Email</h3>
            <p>support@handyhub.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>123 HandyHub Street, Service City, HC 12345</p>
          </div>
        </div>
      </section>
    </div>
  )
}

