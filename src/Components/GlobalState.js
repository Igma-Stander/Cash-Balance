import { Button } from "react-bootstrap";
import "../App.css";

export const initialState = {
  balance: 0,
};

export const reducers = (state = initialState, action) => {
  //error statement for when input is empty, keeps popping up twice
  if (action.type === "DEPOSIT" || action.type === "WITHDRAW") {
    if (isNaN(action.amount) || action.amount === "") {
      alert("Input a valid amount");
      return state;
    }
  }

  //all the action types
  if (action.type === "DEPOSIT") {
    return { ...state, balance: state.balance + action.amount };
  } else if (action.type === "WITHDRAW") {
    return { ...state, balance: state.balance - action.amount };
  } else if (action.type === "INTEREST") {
    //getting the 5% of value plus what is already displayed as the balance
    const balance =
      parseFloat(state.balance) + parseFloat(state.balance) * 0.05;
    return {
      ...state,
      balance: balance.toFixed(2),
    };
  } else if (action.type === "CHARGES") {
    //used toFixed because it looks neater
    const newBalance =
      parseFloat(state.balance) - parseFloat(state.balance) * 0.15;
    return { ...state, balance: newBalance.toFixed(2) };
  }
  return state;
};

//reuseable button component
//styling of button here
export const Press = ({ onClick, children }) => {
  return (
    <Button className="button" type="success" onClick={onClick}>
      {children}
    </Button>
  );
};
