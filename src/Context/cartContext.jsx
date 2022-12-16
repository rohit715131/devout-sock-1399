import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/cartreducer";
import { useToast } from "@chakra-ui/react";
const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 100,
};

const CartProvider = ({ children }) => {
  const toast = useToast();
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, price, list) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, price, list } });
    return toast({
      position: "bottom-left",
      title: "Item Added Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
