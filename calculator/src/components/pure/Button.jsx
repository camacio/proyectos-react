import PropTypes from "prop-types";

const Button = ({ text, clickHandler }) => {
  return <button onClick={() => clickHandler(text)}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
