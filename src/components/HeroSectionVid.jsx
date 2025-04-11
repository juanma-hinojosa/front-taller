import "../css/HeroSectionVidComponent.css";

function HeroSectionVidComponent(props) {
  return (
    <section className="hero-container">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={props.video} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>Tu Auto en Buenas Manos</h1>
        <p>Especialistas en mecánica, chapa y pintura</p>
      </div>
    </section>
  );
}

export default HeroSectionVidComponent;
