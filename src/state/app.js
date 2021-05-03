const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "The Jaffa Cake Supreme",
      description:
        `Macaroon lollipop brownie toffee tiramisu gingerbread. Wafer tart wafer cookie cake. Cake gingerbread sesame snaps chocolate bar chupa chups lemon drops soufflé. Chocolate cake tart fruitcake pastry biscuit. Powder tiramisu chocolate halvah wafer candy canes cotton candy chocolate cake dessert. Macaroon candy gummi bears gummies pastry. Powder caramels lollipop sugar plum jujubes apple pie. Pie cookie cookie cake powder sweet roll...`,
      price: 15.0,
    }
  ], // id, title, desc, price, img
  cart: [], //qty + id, title, desc, price, img
  currentItem: null

}

// const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const ADJUST_QTY = "ADJUST_QTY"
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM"

export const ADD_ONE = "ADD_ONE"
export const MINUS_ONE = "MINUS_ONE"

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    }
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  }
}

export const adjustQTY = (itemID, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }

}

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item
  }





}

export const addOne = (itemID, value) => {
  return {
    type: ADD_ONE,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

export const minusOne = (itemID, value) => {
  return {
    type: MINUS_ONE,
    payload: {
      id: itemID,
      qty: value
    }
  }
}



const shop = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      // get items data from products array

      const item = state.products.find(prod => prod.id === action.payload.id)
      // check if item is in cart
      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
      return {

        ...state,
        cart: inCart ? state.cart.map(
          item => item.id === action.payload.id ? {
            ...item,
            qty: (item.qty > 0 &&  item.qty <10) ? item.qty + 1 : item.qty = 10
          } : item)

          : [...state.cart, { ...item, qty: 1 }]


      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      }
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
      }
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    case ADD_ONE:
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
      }
    case MINUS_ONE:
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: -action.payload.qty } : item)
      }

    default:
      return state;
  }

}



export default shop;