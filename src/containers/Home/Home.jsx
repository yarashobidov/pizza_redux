import Card from "../../components/Card/Card";
import "./home.scss";
import { useSelector } from "react-redux";

function Home() {
  const pizza = useSelector((state) => state.pizzas.products);

  return (
    <div className="home">
      <h1 className="title">Все пиццы</h1>
      <div className="container">
        {pizza.map((piz) => (
          <Card
            key={piz.id}
            id={piz.id}
            title={piz.title}
            text={piz.desc}
            price={piz.price}
            url={piz.url}
            quantity={piz.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
