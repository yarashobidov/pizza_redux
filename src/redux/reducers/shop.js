import { ADD_PIZZA, DEL_PIZZA, DEL_ALL_PIZZA, INCR, DECR } from "../types/types";

const initialState = []

export const addPizza = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PIZZA:
      const pizza = state.find(x => x.id === payload.id)
      if (pizza) {
        return state.map(x => x.id === payload.id ? { ...x, quantity: x.quantity + 1 } : x)
      } else {
        return [...state, { ...payload, quantity: 1 }]
      }

    case DEL_PIZZA:
      const result = state.filter(piz => piz.id !== payload)
      return result
    case DEL_ALL_PIZZA:
      return []
    case DECR:
      const pizi = state.find(x => x.id === payload.id)
      if (pizi.quantity === 1) {
        return state.filter(x => x.id !== pizi.id)
      } else {
        return state.map(x => x.id === payload.id ? { ...x, quantity: x.quantity - 1 } : x)
      }
    case INCR:
      return state.map(x => x.id === payload.id ? { ...x, quantity: x.quantity + 1 } : x)

    default:
      return state;
  }
};
