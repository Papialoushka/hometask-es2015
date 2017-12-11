import ResourcePage from './articles';
import PlainTextResourcePage from './plain-text';
import Button from './button';
import './../styles/screen.css';
import './../styles/articles.css'

export default function renderArticles(id) {
  (function () {
    const apiKey = '59c232ebefc84b5d9c489f4222161cf2',
    resourceUrl = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${apiKey}`,
    articlesList = document.getElementById('resourceOutput'),
    resourcesList = document.getElementById('newsResources'),
    button = document.getElementById('closeButton'),
    header = document.getElementById('mainContent'),
    getResponse = (response) => response.json(),
    addHidden = (elem) => elem.classList.add('hidden'),
    removeHidden = (elem) => elem.classList.remove('hidden'),
    checkbox = document.getElementById('removeImages'),
    checkboxWrapper = document.getElementById('checkboxWrapper');

    fetch(resourceUrl)
    .then(getResponse)
    .then(source => {
      source.articles.forEach(article => {
        const render = () => {
          let newArticle;

          if (checkbox.checked) {
            newArticle = new PlainTextResourcePage(article);
          } else {
            newArticle = new ResourcePage(article);
          }

          newArticle.createList('article', 'resourceOutput');
        };

        render();
        addHidden(resourcesList);
        addHidden(checkboxWrapper);
        removeHidden(button);
        header.scrollIntoView();
      });
    });

    const buttonClick = (e) => {
      removeHidden(resourcesList);
      removeHidden(checkboxWrapper);
      articlesList.innerHTML = '';
    };

    button.addEventListener('click', buttonClick, false);
  })();
}
