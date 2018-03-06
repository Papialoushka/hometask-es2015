import React, {Component} from 'react';
import TweetList from './TweetList';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.addTwit = this.addTwit.bind(this);
    this.deleteTwit = this.deleteTwit.bind(this);
  }

  addTwit(item) {
    return <li key={item.key}><h2>{item.author}</h2><p>{item.twit}</p><button onClick={() => this.deleteTwit(item.key)}>Delete</button></li>
  }

  deleteTwit(key) {
    this.props.delete(key);
  }

  render() {
    const twits = this.props.entries;
    const listItems = twits.map(this.addTwit);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}

export default Tweet;