import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();
const API = `http://localhost:8000/all_products`;
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  bestSeller: [],
  allProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getProducts(API);
  }, []);
  const getProducts = async (url) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "ALL_PRODUCTS", payload: products });
      dispatch({ type: "BEST_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
