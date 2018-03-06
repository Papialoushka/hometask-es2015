export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const ADD_TWEET = 'ADD_TWEET';
export const DELETE_TWEET = 'DELETE_TWEET';
export const FILTER_TWEETS = 'FILTER_TWEETS';

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet: tweet
  }
}

export function deleteTweet(id) {
  return {
    type: DELETE_TWEET,
    id: id
  }
}

export function filterTweets(filter) {
  return {
    type: FILTER_TWEETS,
    filter: filter
  }
}

function requestTweets() {
  return {
    type: REQUEST_TWEETS,
    requestPayload : {
      tweetsResponse : [],
      areTweetsLoading : true
    }

  }
}

function receiveTweets(response) {
  return {
    type: RECEIVE_TWEETS,
    receivePayload : {
      tweetsResponse: response,
      areTweetsLoading : false
    }
  }
}

function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    receivePayload : {
      tweetsResponse: {errorMessage: error.message},
      areTweetsLoading : false
    }
  }
}

export function getTweets(username) {
  return dispatch => {
    dispatch(requestTweets());
    return fetch(`/user_timeline?screen_name=${username}`)
      .then(response => response.json())
      .then(response => dispatch(receiveTweets(response)))
      .catch(error =>  dispatch(receiveError(error)));
  }
}