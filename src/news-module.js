//import 'babel-polyfill';
import 'isomorphic-fetch';
import 'es6-promise';
import NewsResource from './news-resources-link';
import ResourcePage from './articles';
import './screen.css';

(function () {
  const apiKey = '59c232ebefc84b5d9c489f4222161cf2',
      apiUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`,
      resourcesList = document.getElementById('newsResources'),
      articlesList = document.getElementById('resourceOutput'),
      button = document.getElementById('closeButton'),
      header = document.getElementById('mainContent'),
      getResponse = (response) => response.json(),
      addHidden = (elem) => elem.classList.add('hidden'),
      removeHidden = (elem) => elem.classList.remove('hidden'),
      getResources = (resources) => {
        resources.sources.forEach(source => {
          const newResourceItem = new NewsResource(source);

          newResourceItem.createLink();
        });
        return resources.sources.id;
      };


  const request = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await getResponse(response);
      const parseJson = await getResources(json);
    } catch (e) {
      console.log(e);
    }
    //const response = await fetch(apiUrl);
    //const json = await getResponse(response);
    // const parseJson = await getResources(json);
    //console.log(json);
  };

  request();

  // fetch(apiUrl)
  // .then(getResponse)
  // .then(resources => {
  //   resources.sources.forEach(source => {
  //     const newResourceItem = new NewsResource(source);
  //
  //     newResourceItem.createLink();
  //   });
  //   return resources.sources.id;
  // });

  const resourceClick = (e) => {
    e.preventDefault();

    const id = e.target.id,
        resourceUrl = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${apiKey}`;

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
  };

  const buttonClick = (e) => {
    removeHidden(resourcesList);
    articlesList.innerHTML = '';
    addHidden(button);
  };

  resourcesList.addEventListener('click', resourceClick, false);
  button.addEventListener('click', buttonClick, false);
})();