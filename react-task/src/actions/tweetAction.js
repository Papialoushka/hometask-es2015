import * as types from './../constants/ActionTypes';

export function addTweet(text){
  return {
    type: types.ADD_TWEET,
    text: text
  }
};

export function deleteTweet(id){
  return {
    type: types.DELETE_TWEET,
    id: id
  }
};

export function filterTweets(author){
  return {
    type: types.FILTER_TWEETS,
    author: author
  }
};
