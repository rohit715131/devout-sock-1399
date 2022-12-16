const ProductReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "ALL_PRODUCTS":
      const allProduct = action.payload.map((ele) => {
        return ele;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        allProduct: allProduct,
      };
    case "BEST_PRODUCTS":
      const bestProduct = action.payload.filter((ele) => {
        return ele.bestSeller === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        bestSeller: bestProduct,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "IS_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCTS":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    case "GET_SORTING":
      return {
        ...state,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductReducer;
