import { useReducer } from "react";
import CartContext from "./CartContext";

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    // contact добавляет новый элемент в массив и возвращает новый измененный массив
    // НАМ НУЖНО ПОЛУЧАТЬ НОВОЕ СОСТОЯНИЕ, А НЕ ССЫЛКУ НА СТАРОЕ СОСТОЯНИЕ. ТАКОЙ ПОДХОД БУДЕТ ЛУЧШЕ
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = +(
      state.totalAmount +
      action.item.price * action.item.amount
    ).toFixed(2);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = item => {
    dispatchCartAction({
      type: ADD_ITEM,
      item,
    });
  };
  const removeItemHandler = id => {
    dispatchCartAction({
      type: REMOVE_ITEM,
      id,
    });
  };

  const cartContext = {
    items: cartState,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
