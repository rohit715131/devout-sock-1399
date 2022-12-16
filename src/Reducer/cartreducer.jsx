const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, price, list } = action.payload;
    let cartProductList;
    cartProductList = {
      id: list.id,
      name: list.productName,
      price: list.price,
      image: list.image,
    };
    return {
      ...state,
      cart: [...state.cart, cartProductList],
    };
  }
  return state;
};

export default CartReducer;
