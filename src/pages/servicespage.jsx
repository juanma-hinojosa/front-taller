import HeroSectionVidComponent from "../components/HeroSectionVid";
import ServiceHeroVid from "/public/videos/service-hero.mp4";

function ServicesPage() {
  return (
    <>
      <HeroSectionVidComponent video={ServiceHeroVid} />
      <h1>Servicios</h1>

      <section>
        <h2>Mecánica General</h2>
        <p>Revisiones, frenos, suspensión, diagnóstico computarizado...</p>
      </section>

      <section>
        <h2>Chapa</h2>
        <p>Reparación de golpes, enderezado, soldaduras especiales...</p>
      </section>

      <section>
        <h2>Pintura</h2>
        <p>Pintura completa o parcial, cabina presurizada, pulido y más.</p>
      </section>
    </>
  );
}

export default ServicesPage;
