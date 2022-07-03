import "./Section.css";
import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <div className="main">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Section.defaultProps = {
  title: "",
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
