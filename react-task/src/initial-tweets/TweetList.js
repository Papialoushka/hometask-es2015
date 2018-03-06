import React, {Component} from 'react';
import Tweet from './Tweet';

class TweetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twits: [],
    };

    this.addToList = this.addToList.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
    this.filterTwits = this.filterTwits.bind(this);
  }

  addToList(event) {
    event.preventDefault();
    const itemArray = this.state.twits;

    if (this._inputElement.value !== '') {
      itemArray.unshift({
        author: this._inputElement.value,
        twit: this._textareaElement.value,
        key: Date.now()
      });

      this.setState({
        twits: itemArray
      });

      this._inputElement.value = '';
      console.log(itemArray);
    }
  }

  deleteFromList(key) {
    const updatedTwits = this.state.twits.filter((item) => (item.key !== key));

    this.setState({
      twits: updatedTwits
    });
  }

  filterTwits(event) {
    const initialTwits = this.state.twits;
    const preserveInitialTwits = initialTwits.slice();

    if (event.target.value === '') {
      this.setState({twits: preserveInitialTwits});
    } else {
      const filteredList = initialTwits.filter((twit) => twit.author === event.target.value || twit.twit === event.target.value);

      this.setState({twits: filteredList});
    }
  }

  handleTwitChange(event) {
    const initialTwits = this.state.twits;
    const preserveInitialTwits = initialTwits.slice();
    this.setState({
      twit: event.target.value
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.addToList}>
          <input type="text" placeholder="Search" onChange={this.filterTwits}/>
          <label htmlFor="twitAuthor">Type your user name please
            <input id="user" type="text" name="twitAuthor" ref={(a) => this._inputElement = a}/>
          </label>
          <label htmlFor="twitText">Type your message please
            <textarea id="twitText" name="twitText" ref={(a) => this._textareaElement = a}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <Tweet entries={this.state.twits} filtered={this.state.filtered} delete={this.deleteFromList}>{this.state.twits}</Tweet>
      </div>
    );
  }
}

export default TweetList;
