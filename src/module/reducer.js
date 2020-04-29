import {
  ADD_TO_CART,
  ADD_TO_FAVORITE,
  REMOVE_MESSAGE,
  NEW_MESSAGE,
  PAGE_CHANGE,
} from "./action.js";

export const defaultState = {
  page: "Buy",
  cart: [],
  favs: [],
  msgs: [],
};

const AppState = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cart.includes(action.itemName)) {
        return {
          ...state,
          cart: [...state.cart, action.itemName],
        };
      } else {
        return state;
      }
    case ADD_TO_FAVORITE:
      if (!state.favs.includes(action.itemName)) {
        return {
          ...state,
          favs: [...state.favs, action.itemName],
        };
      } else {
        return state;
      }
    case REMOVE_MESSAGE:
      let index = state.msgs.indexOf(action.message);
      if (index !== -1) {
        let msgs = state.msgs;
        msgs.splice(index, 1);
        return Object.assign({}, state, {
          msgs: msgs,
        });
      }
      return state;
    case NEW_MESSAGE:
      return {
        ...state,
        msgs: [...state.msgs, action.message],
      };
    case PAGE_CHANGE:
      return Object.assign({}, state, {
        page: action.pageName,
      });
    default:
      return state;
  }
};

export default AppState;
