import { UserCircle } from "@phosphor-icons/react";
import { useEffect } from "react";

function HeroSection(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <section
      style={{ backgroundImage: `url(${props.image})` }}
      className="hero-section"
    >
      <h1 className="hero-text hero-header">Featured Article</h1>
      <p className="hero-text hero-p">{props.title}</p>
      <p className="hero-text hero-author">
        <UserCircle
          style={({ textAlign: "center" }, { marginRight: "10px" })}
          weight="bold"
          color="whitesmoke"
          size={32}
        />
        <span>{props.author}</span>
      </p>
    </section>
  );
}

export default HeroSection;