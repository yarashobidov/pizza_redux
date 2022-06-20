import { Link } from "react-router-dom";
import img from "../../images/shopping-cart-colour.png";
import icon from "../../images/iconfinder_shopping-cart_2561279.png";
import delet from "../../images/delete.png";
import CartItem from "../CartItem/CartItem";
import { useDispatch } from "react-redux";
import { deleteAllPizza } from "../../redux/actions/action";
import { useEffect, useState } from "react";

export const Pusta = () => {
  return (
    <div className="pusta">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={img} alt="shopping cart colour" />
      <Link to="/" className="btn">
        Вернуться назад
      </Link>
    </div>
  );
};

export const Cart = ({ cart }) => {
  const dispatch = useDispatch();
  const [summa, setSumma] = useState(0);
  useEffect(() => {
    let number = 0;
    cart.forEach((element) => {
      number += element.price * element.quantity;
    });
    setSumma(number);
  }, [cart]);
  return (
    <div className="cart">
      <div className="top">
        <div className="title">
          <img src={icon} alt="icon" />
          <span>Корзина</span>
        </div>
        <div className="delete" onClick={() => dispatch(deleteAllPizza())}>
          <img src={delet} alt="delete" />
          <span>Очистить корзину</span>
        </div>
      </div>
      {/* XXXXX top XXX */}
      <div className="center">
        {cart.map((c) => (
          <CartItem
            key={c.id}
            id={c.id}
            img={c.url}
            title={c.title}
            text="тонкое тесто, 26 см."
            item={c.quantity}
            all={c}
            price={c.price * c.quantity}
          />
        ))}
      </div>
      {/* XXXX center XXXX */}
      <div className="bottom">
        <div className="dona">
          Всего пицц: <span>{cart.length} шт.</span>
        </div>
        <div className="narx">
          Сумма заказа: <span>{summa} см</span>
        </div>
      </div>
      <div className="btn-group">
        <Link to="/" className="btn btn-lht">
          {" "}
          Вернуться назад
        </Link>
        <div className="btn-bg btn">Оплатить сейчас</div>
      </div>
    </div>
  );
};
