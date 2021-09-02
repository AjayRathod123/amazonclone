import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = (value) => {
  const [{ basket }, dispatch] = useStateValue();
  value = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basket.length} items):
          <strong>$ {value}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contain a gift
        </small>
      </>
      {/* , decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"} */}
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
