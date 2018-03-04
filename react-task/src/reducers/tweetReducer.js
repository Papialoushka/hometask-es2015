
import * as actionTypes from './../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){

      case actionTypes.ADD_TWEET:
      return [
        ...state,
        Object.assign({}, action.tweet)
      ];
      case actionTypes.DELETE_TWEET:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
  };
