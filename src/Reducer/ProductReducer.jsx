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

    default:
      return {
        state,
      };
  }
};

export default ProductReducer;
