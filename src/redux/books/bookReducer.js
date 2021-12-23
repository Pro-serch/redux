import { BUY_BOOK } from "./bookType";

const initialstate = {
  numberOfBooks: 10,
};

const bookReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks-1,
      };
    default:
      return state;
  }
};
export default bookReducer;
