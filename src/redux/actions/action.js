import { ADD_PIZZA, DECR, DEL_ALL_PIZZA, DEL_PIZZA, INCR } from "../types/types";


export const addPizza = (pizza) => {
  return {
    type: ADD_PIZZA,
    payload: pizza,
  };
};

export const deletePizza = (id) => {
  return {
    type: DEL_PIZZA,
    payload: id
  }
}

export const deleteAllPizza = () => {
  return {
    type: DEL_ALL_PIZZA
  }
}

export const decrement = (pizza) => {
  return {
    type: DECR,
    payload: pizza
  }
}
export const increment = (pizza) => {
  return {
    type: INCR,
    payload: pizza
  }
}

