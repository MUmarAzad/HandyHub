import heroImg from '../src/assets/images/hero-home.svg'
import aboutImg from '../src/assets/images/about.svg'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="container">
      <section className="section hero grid">
        <div className="hero home">
          <div className="hero content">
            <h1 className="section-title">Discover Reliable Home Services With HandyHub!</h1>
            <p className="hero-description">We are your one-stop platform for diverse services</p>
            <div className="button-group">
              <a href="/signup" className="button primary">Get Started</a>
              <a href="/categories" className="button secondary">Explore our services</a>
            </div>
          </div>
        </div>
        <div className="about-img-container">
          <img className='hero-img' src={ heroImg } alt="A working person"/>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <div className='about-img-container'>
            <img className="about-img" src={ aboutImg } alt="About HandyHub" width={400} height={400}/>
          </div>
          <div className='about-description'>
            <div className='about top'>
              <h2 className="section-title">About Us</h2>
              <p>At HandyHub we believe in delivering exceptional services at your doorstep with a personal touch.</p>
            </div>
            <div className='about bottom'>
              <h3 className="subsection-title">Featured</h3>
              <p>From plumbing to delivery services, and skilled electricians too, HandyHub connects you with reliable professionals for all your daily needs. Simplify your life with our curated, top-rated solutions tailored just for you.</p>
              <div>
                <a href="/categories" className="button primary">Explore our services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card">
              <img src={`../src/assets/images/why-choose-us${i}.svg`} alt={`Team ${i}`} width={100} height={100} className="choose-us-img" />
              <p className="choose-us-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <p className="choose-us-author">- John Doe</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section explore">
          <div className="card grid">
            <div className='explore-section'>
              <h2 className="section-title">Explore</h2>
              <p>Master mind behind siolving ur problems whether you are stuck or need a free of cost pizza... just give us a call... we wont pick up</p>
              <p>Master mind behind siolving ur problems whether you are stuck or need a free of cost pizza... just give us a call... we wont pick upMaster mind behind siolving ur problems whether you are stuck or need a free of cost pizza... just give us a call... we wont pick upMaster mind behind siolving ur problems whether you are stuck or need a free of cost pizza... just give us a call... we wont pick up</p>
              <p>Master mind behind siolving ur problems whether you are stuck or need a free of cost pizza... just give us a call... we wont pick up</p>
              <a href="/learn-more" className="button secondary">Learn more.</a>
            </div>
            <div className='about-img-container'>
              <img className="explore-img" src="../src/assets/images/explore-img.svg" alt="Explore HandyHub" width={400} height={300} />
            </div>
          </div>
      </section>
    </div>
  )
}