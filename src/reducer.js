export const initialState = {
  basket: [],
  user: null,
  //   user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    //   break;
    case "REMOVE_TO_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id:${action.id}) as its not`);
      }
      return { ...state, basket: newBasket };
    //   break;
    default:
      return state;
  }
}
export default reducer;
