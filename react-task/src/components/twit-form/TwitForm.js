import React, {Component} from 'react';
import TwitList from './../../components/twit-list/TwitList';

class TwitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twits: []
    };

    this.addTwit = this.addTwit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  addTwit(event) {
    event.preventDefault();
    const twits = this.state.twits;

    twits.unshift({
      author: this.handleAuthorChange(),
      twit: this.handleMessageChange(),
      key: Date.now()
    });

    this.setState({
      twits: twits
    });
  }

  handleMessageChange(event) {
    return event.target.value;
  }

  handleAuthorChange(event) {
    return event.target.value;
  }

  render() {
    return (
      <TwitForm entries="this.state.twits" onSubmit={this.addTwit}>
        <label htmlFor="twitAuthor">Type your user name please
          <input id="user" type="text" name="twitAuthor" placeholder="For example Nickname1"
                 onChange={this.handleAuthorChange}/>
        </label>
        <label htmlFor="twitText">Type your message please
          <textarea id="twitText" name="twitText" placeholder="Enter your Message please"
                    onChange={this.handleMessageChange}/>
        </label>
        <label htmlFor="submitTwit">
          <input type="submit" name="submitTwit" value="Submit"/>
        </label>
      </TwitForm>
    );
  }
}

export default TwitForm;