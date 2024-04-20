import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful cms</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus laudantium ea assumenda, odio quisquam, esse ipsam
            laborum magni quos impedit architecto harum cumque iste
            consequuntur, quo sapiente culpa deleniti in?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
