import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartreducer";
import { useToast } from "@chakra-ui/react";
const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("CART")) || [],
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
  const removeItem = (id) => {
    console.log(id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // add local storage

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("CART", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
