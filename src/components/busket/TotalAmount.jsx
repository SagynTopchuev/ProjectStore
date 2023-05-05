import React from "react";
import { Button } from "../UI/Button";

export const TotalAmount = ({ totalPrice = 1212.21 }) => {
  return (
    <div>
      <section>
        <h3>Total Amount</h3>
        <h4>{totalPrice}</h4>
      </section>
      <section>
        <Button variant="outlined">Close</Button>
        <Button >Order</Button>
      </section>
    </div>
  );
};
