import { UserCircle } from "@phosphor-icons/react";
import PropTypes from "prop-types";

function FeaturedArticle(props) {
  return (
    <section
      style={{ backgroundImage: `url(${props.image})` }}
      className="hero-section"
    >
      <h1 className="hero-text hero-link">Click to read</h1>
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

export default FeaturedArticle;

FeaturedArticle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
