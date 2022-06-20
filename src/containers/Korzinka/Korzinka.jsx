import { useSelector } from "react-redux";
import { Pusta, Cart } from "../../components/Cart/Cart";

import "./korzinka.scss";

function Korzinka() {
  const cart = useSelector((state) => state.pizzas.shop);

  return (
    <div className="korzinka">
      {cart.length > 0 ? <Cart cart={cart} /> : <Pusta />}
    </div>
  );
}

export default Korzinka;
