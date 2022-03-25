import { createContext, useReducer, useContext } from "react";

const cartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const reducerFunction = (state, action) => {

    switch (action.type) {
      case "ADD_TO_CART":
        let index = state.cart.findIndex((ele) => ele.id === action.payload.id)
        if(index === -1)
          return {
            ...state,
            itemCount: state.itemCount + 1,
            cart: index === -1 ? [ ...state.cart, {...action.payload}] : [...state.cart]
          };
        break;

      case "QUANTITY_INCREMENT":
        return {
          ...state,
          cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
          ),
        };

        case "QUANTITY_DECREMENT":
          return {
            ...state,
            cart: state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
            ),
          }

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c) => c._id !== action.payload._id),
          itemCount: state.itemCount - 1,

        };
      default:
        return { state };

    }


  };

  const [state, dispatch] = useReducer(reducerFunction, {
    cart: [],
    itemCount: 0,
  });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartContextProvider, useCart };
