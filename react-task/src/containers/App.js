import React, {Component} from 'react';
import logo from './../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import TweetList from './../initial-tweets/TweetList';
import TwitForm from './../components/twit-form/TwitForm';

// class App extends Component {
//   render() {
//     const {dispatch, areTweetsLoading} = this.props;
//
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//           <h1 className="App-title">Welcome to our React Homemade Twitter</h1>
//         </header>
//         {/*<TweetSearch areTweetsLoading={areTweetsLoading} dispatch={dispatch}/>*/}
//         {/*<TwitForm />*/}
//         <TwitList author="me" twit="some twit"/>
//       </div>
//
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to our React Homemade Twitter</h1>
        </header>
        <TweetList author="me" twit="some twit" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tweets: state.tweets
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTweet: tweet => dispatch(tweetAction.addTweet(tweet)),
//     deleteTweet: index => dispatch(tweetAction.deleteTweet(index)),
//     filterTweets: author => dispatch(tweetAction.filterTweets(author))
//   }
// };

export default connect(mapStateToProps)(App);