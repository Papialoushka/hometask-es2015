import 'isomorphic-fetch';
import 'es6-promise';
import './../styles/screen.css';
import renderArticles from './render-articles';
import renderResources from './render-resources';
import data from '../../data/data.json';
import Button from './button';

(function () {
  const resourcesList = document.getElementById('newsResources'),
  button = new Button();

  button.create();
  renderResources();

  const resourceClick = (e) => {
    e.preventDefault();

    const id = e.target.id;

    renderArticles(id);
  };

  resourcesList.addEventListener('click', resourceClick, false);

  console.log(JSON.stringify(data));

  // To check if plugin works.
  console.log(42);
})();
