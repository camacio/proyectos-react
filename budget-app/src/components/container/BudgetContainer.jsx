import React, { useState } from "react";
import PropTypes from "prop-types";
import InitialForm from "../pure/InitialForm";
import BudgetForm from "../pure/BudgetForm";
import Budget from "../pure/Budget";

const BudgetContainer = (props) => {
  const [budgets, setBudgets] = useState([]);

  const [component, setComponent] = useState(true);

  const [budgetComponent, setBudgetComponent] = useState(true);

  const defineBudget = (budget) => {
    setBudgets([...budgets, budget]);
  };

  return (
    <div className="container bg-white bg-opacity-10 rounded shadow p-5 mt-5">
      <h1>Weekly Budget</h1>
      {component ? (
        <div className="row">
          <div className="col">
            <InitialForm setComponent={setComponent} />
          </div>
        </div>
      ) : (
        <div className="row">
          {budgetComponent ? (
            <div className="col">
              <BudgetForm
                defineBudget={defineBudget}
                setBudgetComponent={setBudgetComponent}
              />
            </div>
          ) : (
            <div className="col">
              {budgets.map((budget) => {
                return <Budget key={budget.id} budget={budget} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

BudgetContainer.propTypes = {};

export default BudgetContainer;
