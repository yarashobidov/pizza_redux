import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/actions/action";

function Card({ id, title, text, price, url, quantity }) {
  const products = useSelector((state) => state.pizzas.products);
  const dispatch = useDispatch();
  function addPizzaa(i) {
    const result = products.find((x) => x.id === i);
    dispatch(addPizza(result));
  }
  return (
    <div className="card">
      <div className="imgDiv">
        <img src={url} alt={text} />
      </div>
      <div className="main-container">
        <div className="texts">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="priceDiv">
          <span className="price">от {price} сум</span>
          <button className="btn" onClick={() => addPizzaa(id)}>
            Добавить{" "}
            {quantity > 0 && <span className="circle">{quantity}</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
