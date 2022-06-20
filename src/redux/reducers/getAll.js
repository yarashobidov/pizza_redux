import { ALL_PIZZA, ADD_PIZZA, DEL_PIZZA, DEL_ALL_PIZZA, INCR, DECR } from "../types/types";

const initialState = {
  products: [
    {
      id: "1",
      title: "Гурме",
      desc: "Пицца соус, маслины, пепперони, грибы, орегано",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fd020eb98-5c57-43d6-ba90-969907dc8186.jpg&w=384&q=75",
      price: 50000,
      quantity: 0,
    },
    {
      id: "2",
      title: "Супер Микс",
      desc: "Нежное куриное филе, сыр моцарелла, томаты и Ранч соус",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F94844930-5c66-4c12-a670-93b048169dbe.jpg&w=384&q=75",
      price: 80000,
      quantity: 0,
    },
    {
      id: "3",
      title: "Чиккен карри",
      desc: "Говяжий рулет и куриное филе в сочетании с сыром моцарелла, ананасами и соусом карри",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F45bd4064-2430-4250-899d-d6f834d36c30.jpg&w=384&q=75",
      price: 120000,
      quantity: 0,
    },

    {
      id: "4",
      title: "Сырный цыплёнок",
      desc: "Нежное куриное филе, сыр моцарелла, томаты и сырный соус",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F17126e05-7876-45a6-be19-e6d0af0328a4.jpg&w=384&q=75",
      price: 45000,
      quantity: 0,
    },
    {
      id: "5",
      title: "Двойная пепперони",
      desc: "Двойная порция пепперони в сочетании с сыром моцарелла под томатным соусом",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F23138748-1bff-4994-b42b-cf7044ed4e0d.jpg&w=384&q=75",
      price: 54000,
      quantity: 0,
    },
    {
      id: "6",
      title: "Цыплёнок Ранч",
      desc: "Нежное куриное филе, сыр моцарелла, томаты и Ранч соус",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F0a6ad3e4-3cac-40d4-a278-13416f28b5fe.jpg&w=384&q=75",
      price: 60000,
      quantity: 0,
    },

    {
      id: "7",
      title: "Халапеньо",
      desc: "Филе индейки, нежная говядина, лук шалот, томаты, пикантные перчики халапеньо, сыр Моцарелла и барбекю соус",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F84e3a554-551a-45f6-9ac1-9c7870aa6f14.jpg&w=384&q=75",
      price: 40000,
      quantity: 0,
    },
    {
      id: "8",
      title: "Пепперони",
      desc: "Пепперони, сыр Моцарелла и томатный соус",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F601282db-7274-43e4-ac74-e8987d53dd6e.jpg&w=384&q=75",
      price: 27000,
      quantity: 0,
    },
    {
      id: "9",
      title: "Мексиканская",
      desc: "Говяжий рулет, нежное куриное филе, острые перчики Халапеньо, сыр Моцарелла, барбекю соус",
      url: "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F07b2af79-95e0-48ae-8962-3b29fdfcb6d4.jpg&w=384&q=75",
      price: 95000,
      quantity: 0,
    },
  ],
  shop: []
}

export const allPizza = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_PIZZA:
      return { ...state, products: payload };
    case ADD_PIZZA:
      const pizza = state.shop.find(x => x.id === payload.id)
      if (pizza) {
        return {
          ...state,
          products: state.products.map(x => x.id === payload.id ? { ...x, quantity: x.quantity + 1 } : x),
          shop: state.shop.map(x => x.id === payload.id ? { ...x, quantity: x.quantity + 1 } : x)
        }
      } else {
        return {
          ...state,
          products: state.products.map(x => x.id === payload.id ? { ...x, quantity: x.quantity + 1 } : x),
          shop: [...state.shop, { ...payload, quantity: 1 }]
        }
      }

    case DEL_PIZZA: {
      const result = state.shop.filter(piz => piz.id !== payload)
      const alresult = state.products.map(x => x.id === payload ? { ...x, quantity: 0 } : x)
      return { ...state, products: alresult, shop: result }
    }
    case DEL_ALL_PIZZA:
      const result = state.products.map(piz => { piz.quantity = 0; return piz })
      return { ...state, products: result, shop: [] }
    case DECR:
      const pizi = state.shop.find(x => x.id === payload.id)
      if (pizi.quantity === 1) {
        const result = state.shop.filter(x => x.id !== pizi.id)
        const alresult = state.products.map(x => x.id === pizi.id ? { ...x, quantity: 0 } : x)
        return { ...state, products: alresult, shop: result }
      } else {
        const result = state.shop.map(x => x.id === payload.id ? { ...x, quantity: x.quantity - 1 } : x)
        const alresult = state.products.map(x => x.id === payload.id ? { ...x, quantity: x.quantity - 1 } : x)
        return { ...state, products: alresult, shop: result }
      }
    case INCR: {
      const result = state.shop.map(x => x.id === payload.id ? { ...x, quantity: x.quantity + 1 } : x)
      const alresult = state.products.map(x => x.id === payload.id ? { ...x, quantity: x.quantity + 1 } : x)
      return { ...state, products: alresult, shop: result }
    }
    default:
      return state;
  }
};
