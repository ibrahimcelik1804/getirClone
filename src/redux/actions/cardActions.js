import {ADD_TO_CARD, CLEAR_CARD, REMOVE_FROM_CARD} from '../constants';
export const addToCard = payload => {
  return {
    type: ADD_TO_CARD,
    payload,
  };
};

export const removeFromCard = payload => {
  return {
    type: REMOVE_FROM_CARD,
    payload,
  };
};
export const clearCard = () => {
  return {
    type: CLEAR_CARD,
  };
};
