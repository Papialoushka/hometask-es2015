import { combineReducers } from 'redux';
import tweets from './../reducers/tweetReducer';

export default combineReducers({
    tweets: tweets
});
