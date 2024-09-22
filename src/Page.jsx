import SunkenSwamp from "./assets/images/SunkenSwamp.jpg";

function Page() {
  return (
    <section
      style={{ backgroundImage: { SunkenSwamp } }}
      className="hero-section"
    >
      <h1 className="hero-text hero-header">Featured Article</h1>
      <p className="hero-text hero-p">The Vast Mysteries of Space</p>
    </section>
  );
}

export default Page;
