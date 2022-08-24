import PropTypes from "prop-types";
import Button from "../pure/Button";

const Functions = ({ onContentClear, onDelete }) => {
  return (
    <div className="functions">
      <Button text="clear" clickHandler={onContentClear} />
      <Button text="delete" clickHandler={onDelete} />
    </div>
  );
};

Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Functions;
