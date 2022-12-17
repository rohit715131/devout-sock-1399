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
  if (action.type === "REMOVE_ITEM") {
    console.log("check");
    let updatedCartItem = state.cart.filter(
      (currentItem) => currentItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCartItem,
    };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemInCart = state.cart.reduce((initial, current) => {
      let { quantity } = current;
      initial = initial + quantity;
      return initial;
    }, 0);
    return {
      ...state,
      total_item: updatedItemInCart,
    };
  }
  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initial, current) => {
      const { price, quantity } = current;
      initial = initial + price * quantity;
      return initial;
    }, 0);
    return {
      ...state,
      total_price: total_price,
    };
  }
  return state;
};

export default CartReducer;
