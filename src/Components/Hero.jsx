const Hero = () => {
    return (
    <section className="hero">
        <div className="hero-text">
        <h1><center>Welcome to My Portfolio</center></h1>
        <h1><center>I'm Piyush</center></h1>
        <h2><center>Full Stack Developer</center></h2>
        </div>

        <div className="about-img">
        <img
            src="/images/profile.jpg"
            alt="Profile"
            loading="lazy"
        />
        </div>
    </section>
    );
};

export default Hero;
