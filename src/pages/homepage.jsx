import HeroSectionVidComponent from "../components/HeroSectionVid";
import HomeHeroVid from "/public/videos/home-hero.mp4";

function HomePage() {
  return (
    <>
      <HeroSectionVidComponent video={HomeHeroVid} />
      <h1>Bienvenidos al Taller</h1>
      <p>Especialistas en mecánica, chapa y pintura. Tu auto como nuevo.</p>
      {/* Agregá un slider, resumen de servicios, testimonios */}
    </>
  );
}

export default HomePage;
