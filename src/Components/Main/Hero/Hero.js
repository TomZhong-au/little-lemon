import TextContent from "./TextContent";
import HeroImage from "./HeroImage";

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
