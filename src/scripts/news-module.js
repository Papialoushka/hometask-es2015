import 'isomorphic-fetch';
import 'es6-promise';
import './../styles/screen.css';
import renderArticles from './render-articles';
import renderResources from './render-resources';
import data from '../../data/data.json';
import buttonReturn from './button';

(function () {
  const resourcesList = document.getElementById('newsResources');
  const buttonWrapper = document.getElementById('buttonWrapper');

  renderResources();
  buttonWrapper.appendChild(buttonReturn);

  const resourceClick = (e) => {
    e.preventDefault();

    const id = e.target.id;

    renderArticles(id);
  };

  resourcesList.addEventListener('click', resourceClick, false);
})();
