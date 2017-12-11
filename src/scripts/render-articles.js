import ResourcePage from './articles';
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
      removeHidden = (elem) => elem.classList.remove('hidden');

    fetch(resourceUrl)
      .then(getResponse)
      .then(source => {
        source.articles.forEach(article => {
          const newArticle = new ResourcePage(article);

          newArticle.createPage();
          addHidden(resourcesList);
          removeHidden(button);
          header.scrollIntoView();
        });
      });

    const buttonClick = (e) => {
      removeHidden(resourcesList);
      articlesList.innerHTML = '';
      addHidden(button);
    };

    button.addEventListener('click', buttonClick, false);
  })();
}