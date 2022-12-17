import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
  isSingleLoading: false,
  singleProduct: {},
  sortingValue: 1,
};

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
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
  const productFilter = () => {
    dispatch({ type: "GET_SORTING" });
  };

  const getSingleProducts = async (url) => {
    dispatch({ type: "IS_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data[0];
      dispatch({ type: "SET_SINGLE_PRODUCTS", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, getSingleProducts, productFilter, isAuth, setIsAuth }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
