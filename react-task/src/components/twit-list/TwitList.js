import React, {Component} from 'react';
//import TwitItem from './../../components/twit-item/TwitItem';
import TwitForm from './../../components/twit-form/TwitForm';

class TwitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twits: TwitForm.props.entries,
    };

    this.addToList = this.addToList.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
    // this.filterTwits = this.filterTwits.bind(this);
  }

  addToList(item) {
    return <li key={item.key}><h2>{item.author}</h2><p>{item.twit}</p>
      <button onClick={() => this.deleteFromList(item.key)}>Delete</button>
    </li>
  }

  deleteFromList(key) {
    const updatedTwits = this.state.twits.filter((item) => (item.key !== key));

    this.setState({
      twits: updatedTwits
    });
  }

  // filterTwits(event) {
  //   const initialTwits = this.state.twits;
  //   const preserveInitialTwits = initialTwits.slice();
  //
  //   if (event.target.value === '') {
  //     this.setState({twits: preserveInitialTwits});
  //   } else {
  //     const filteredList = initialTwits.filter((twit) => twit.author === event.target.value || twit.twit === event.target.value);
  //
  //     this.setState({twits: filteredList});
  //   }
  // }

  render() {
    const listItems = this.twits.map(this.addTwit);

    return (
      // <TwitItem entries={this.state.twits} filtered={this.state.filtered} delete={this.deleteFromList}>{this.state.twits}</TwitItem>
      <ul className="theList">{listItems}</ul>
    );
  }
}

export default TwitList;