import {ADD_TO_CARD, CLEAR_CARD, REMOVE_FROM_CARD} from '../constants';

const cardItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return [...state, action.payload];

    case REMOVE_FROM_CARD:
      return state.filter(
        cardItem => cardItem.product.id !== action.payload.id,
      );

    case CLEAR_CARD:
      return (state = []);
  }
  return state;
};

export default cardItems;
