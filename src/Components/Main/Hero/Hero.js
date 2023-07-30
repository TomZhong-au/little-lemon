import TextContent from "./HeroContent/TextContent";
import HeroImage from "./HeroImage/HeroImage";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <TextContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
