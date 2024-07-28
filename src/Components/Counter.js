import React, { useReducer, useState } from "react";
import { initialState, reducers, Press } from "./GlobalState";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Counter = () => {
  const [state, dispatch] = useReducer(reducers, initialState);
  //state for input
  const [amount, setAmount] = useState("");

  return (
    <div>
      <h1>My Friendly Finance Wizard</h1>
      <h3 style={{ color: "#57057c" }}>Balance: R{state.balance}</h3>

      {/* only one input used */}
      <input
        className="input"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount here"
      />

      {/* used grid system to style */}
      <Container>
        <br />
        <Row>
          <Col></Col>
          <Col>
            {/* used reuseable button */}
            <Press
              onClick={() =>
                dispatch({ type: "DEPOSIT", amount: parseInt(amount) })
              }
            >
              Deposit
            </Press>
          </Col>

          <Col>
            {/* used onclick like in example, could have made a handle function */}
            <Press
              onClick={() =>
                dispatch({ type: "WITHDRAW", amount: parseInt(amount) })
              }
            >
              Withdraw
            </Press>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col>
            <Press onClick={() => dispatch({ type: "INTEREST" })}>
              Interest(+5%)
            </Press>
          </Col>
          <Col>
            <Press onClick={() => dispatch({ type: "CHARGES" })}>
              Charges(-15%)
            </Press>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
