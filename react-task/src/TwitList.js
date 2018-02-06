import React, {Component} from 'react';
import TwitItem from './TwitItem';

class TwitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twits: []
    };

    this.filterTwits = this.filterTwits.bind(this);
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
    const twits = this.state.twits;
    const filteredList = twits.filter((item) => item === twits.author);

    this.setState({twits: filteredList});
  }

  handleTwitChange(event) {
    this.setState({
      twit: event.target.value
    });
  }

  resetState() {
    this.setState({
      currentAuthor: '',
      twit: ''
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
        <TwitItem entries={this.state.twits} delete={this.deleteFromList}>{this.state.twits}</TwitItem>
      </div>
    );
  }
}

export default TwitList;