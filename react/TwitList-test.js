import React from 'react';
import TwitList from 'TwitList';
import renderer from 'react-test-renderer';

test('Component addTwit and deleteTwit buttons add and delete twits', () => {
  const component = renderer.create(
    <TwitList entries={this.state.twits} filtered={this.state.filtered} delete={this.deleteFromList}>{this.state.twits}><ul className="theList">
      {listItems}
    </ul></TwitList>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.addTwit();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.deleteTwit();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});