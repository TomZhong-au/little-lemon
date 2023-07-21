import TextContent from "./TextContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="section-grid hero-section">
      <div className="section-content-wrapper hero-content">
        <TextContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
