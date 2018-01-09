import ResourcePage from './articles';
import PlainTextResourcePage from './plain-text';
import Button from './button';
import './../styles/screen.css';
import './../styles/articles.css'
import mediator from './mediator';
import buttonReturn from './button';
import ObserversList from './observer';
import scroll from './scroll';

export default function renderArticles(id) {
  (function () {
    const apiKey = '59c232ebefc84b5d9c489f4222161cf2';
    const resourceUrl = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${apiKey}`;
    const articlesList = document.getElementById('resourceOutput');
    const resourcesList = document.getElementById('newsResources');
    const body = document.body;
    const getResponse = (response) => response.json();
    const addHidden = (elem) => elem.classList.add('hidden');
    const removeHidden = (elem) => elem.classList.remove('hidden');
    const checkbox = document.getElementById('removeImages');
    const checkboxWrapper = document.getElementById('checkboxWrapper');
    const observe = new ObserversList();

    fetch(resourceUrl)
      .then(getResponse)
      .then(source => {
        source.articles.forEach(article => {
          const render = () => {
            const newArticle = new ResourcePage(article);

            if (checkbox.checked) {
              mediator.installTo(newArticle);
              newArticle.publish();
            }

            newArticle.createListItem('article', 'resourceOutput');
          };

          render();
          addHidden(resourcesList);
          addHidden(checkboxWrapper);
          removeHidden(buttonReturn);
          observe.subscribe(scroll, 'scroll');
          observe.createNewEmitter(body);
          body.emit('scroll');
          observe.unsubscribe(scroll, 'scroll');
        });
      });

    const buttonClick = (e) => {
      removeHidden(resourcesList);
      removeHidden(checkboxWrapper);
      addHidden(buttonReturn);
      articlesList.innerHTML = '';
    };

    buttonReturn.addEventListener('click', buttonClick, false);
  })();
}