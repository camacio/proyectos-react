import PropTypes from "prop-types";
import Button from "./../pure/Button";

const Numbers = ({ onClickNumber }) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  const renderNumbers = (onClickNumber) => {
    return numbers.map((number) => {
      return (
        <Button
          key={number}
          text={number.toString()}
          clickHandler={onClickNumber}
        />
      );
    });
  };

  return <div className="numbers">{renderNumbers(onClickNumber)}</div>;
};

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
