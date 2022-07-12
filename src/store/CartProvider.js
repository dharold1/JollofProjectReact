import { useReducer, useEffect} from "react";
import CartContext from "./cart-context";

let defaultCartState = {
  items: JSON.parse(sessionStorage.getItem("cart") || "[]"),
  totalAmount: JSON.parse(sessionStorage.getItem("total") || "0"),
};
// let clearedCartState = {
//   items: sessionStorage.setItem("cart", JSON.stringify("[]")),
//   totalAmount: sessionStorage.setItem("total", JSON.stringify("0"))
// }
// let cartLocalStorage =   defaultCartState );

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    // const itemList = {
    //   items: updatedItems,
    //   totalAmount: updatedTotalAmount,
    // };
    // localStorage.setItem("cart", JSON.stringify(itemList));
    // cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
    // console.log(cartLocalStorage);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;

    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    // let itemsList = {
    //   ite
    // }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'DELETE'){
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price * existingCartItem.quantity;
    let updatedItems;

    if (existingCartItem.quantity > 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } 

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    
  }
  if (action.type === 'CLEAR'){
    sessionStorage.setItem("cart", JSON.stringify([])); 
    sessionStorage.setItem("total", JSON.stringify(0));
    let sessionNewCart = {
      items: JSON.parse(sessionStorage.getItem("cart") || "[]"),
      totalAmount: JSON.parse(sessionStorage.getItem("total") || "0"),
    }
    return sessionNewCart;
    
  }
  return defaultCartState;
};
const CartProvider = (props) => {


  // 
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartState.items));
    sessionStorage.setItem("total", JSON.stringify(cartState.totalAmount));
    console.log(cartState)
  }, [cartState.items]);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
const deleteItemHandler = (id) =>  {
  dispatchCartAction({type: "DELETE", id: id});
}
  const clearCartHandler = () => {
    dispatchCartAction({type: "CLEAR"});
    
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
    deleteItem: deleteItemHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
