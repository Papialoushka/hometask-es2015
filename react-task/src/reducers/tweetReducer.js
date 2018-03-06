import {ADD_TWEET, DELETE_TWEET, FILTER_TWEETS} from './../actions';

const initialState = {
  tweets: []
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return [
        ...state,
        Object.assign({}, action.tweet)
      ];
    case DELETE_TWEET:
      return state.filter((data, i) => i !== action.id);
    // case FILTER_TWEETS:
    //   return state.map((tweets, id) => {
    //     if (id === action.id) {
    //       return Object.assign({}, state, {
    //         tweets: tweets
    //       })
    //     }
    //     return state;
    //   });
    default:
      return state;
  }
};

export default tweetReducer;