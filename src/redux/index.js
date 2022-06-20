import { createStore, combineReducers } from "redux";
import { allPizza } from "./reducers/getAll";
import { addPizza } from "./reducers/shop";

const pizza = combineReducers({
  pizzas: allPizza,
  // shop: addPizza,
});

const store = createStore(
  pizza,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
