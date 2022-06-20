import minus from "../../images/minus.png";
import plus from "../../images/plus.png";
import oneDelete from "../../images/oneDelete.png";
import { useDispatch } from "react-redux";
import { deletePizza, increment, decrement } from "../../redux/actions/action";

function CartItem({ id, img, title, text, item, price, all }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="left">
        <div className="img">
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
        <div className="text">
          <h5 className="title">{title}</h5>
          <span className="text-p">{text}</span>
        </div>
      </div>
      <div className="center">
        <img
          src={minus}
          alt=""
          onClick={() => {
            dispatch(decrement(all));
          }}
        />
        <span>{item}</span>
        <img src={plus} alt=" " onClick={() => dispatch(increment(all))} />
      </div>
      <div className="right">{price} сум</div>
      <div className="end">
        <img src={oneDelete} onClick={() => dispatch(deletePizza(id))} alt="" />
      </div>
    </div>
  );
}

export default CartItem;
