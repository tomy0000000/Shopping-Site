export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_FAVORITE = "ADD_TO_FAVO";
export const REMOVE_MESSAGE = "REMOVE_MESS";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const PAGE_CHANGE = "PAGE_CHANGE";

export const addToCart = (itemName) => ({
  type: ADD_TO_CART,
  itemName,
});

export const addToFavorite = (itemName) => ({
  type: ADD_TO_FAVORITE,
  itemName,
});

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message,
});

export const newMessage = (message) => ({
  type: NEW_MESSAGE,
  message,
});

export const pageChange = (pageName) => ({
  type: PAGE_CHANGE,
  pageName,
});
