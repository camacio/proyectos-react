import Result from "../pure/Result";
import { useState } from "react";
import Numbers from "./Numbers";
import MathOperations from "./MathOperations";
import Functions from "./Functions";
import words from "lodash.words";

const Calculator = () => {
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length -1] : "0";

  const numbersHandler = (number) => setStack(`${stack}${number}`);
  const operationHandler = (operation) => setStack(`${stack}${operation}`);
  const equalHandler = () => setStack(eval(stack).toString());
  const deleteHandler = () => {
    const newStack = stack.substring(stack.length - 1);
    setStack(newStack);
  };
  const clearHandler = () => setStack("");

  return (
    <div className="react-calculator">
      <Result value={value}></Result>
      <Numbers onClickNumber={numbersHandler} />
      <Functions onDelete={deleteHandler} onContentClear={clearHandler} />
      <MathOperations
        onClickOperation={operationHandler}
        onClickEqual={equalHandler}
      />
    </div>
  );
};

export default Calculator;
