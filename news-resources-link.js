class NewsResource {
  constructor(news) {
    this.url = news.url;
    this.title = news.name;
    this.description = news.description;
    this.logo = `https://icons.better-idea.org/icon?url=${this.url}&size=80..120..200`;
    this.id = news.id;
  }

  createLink() {
    let resource = document.createElement('li');

    resource.className = 'news-resource';
    resource.id = this.id;
    resource.insertAdjacentHTML('afterBegin', `<h2><a href=${this.url}><img src=${this.logo}>${this.title}</a></h2><p>${this.description}</p>`);

    return document.getElementById('newsResources').appendChild(resource);
  }
}

class ResourcePage extends NewsResource {
  constructor(news) {
    super(news);
    this.header = news.source.name;
    this.title = news.title;
    this.logo = news.urlToImage;
    this.date = news.publishedAt;
  }

  createPage() {
    let article = document.createElement('li'),
        list = document.getElementById('resourceOutput');

    article.className = 'article';
    article.insertAdjacentHTML('afterBegin', `<h3><a href=${this.url}><img src=${this.logo}>${this.title}</a></h3><p>${this.description}</p><p>${this.date}</p>`);
    // list.innerHTML = '';


    return list.appendChild(article);
  }
}

(function () {
  const apiKey = '59c232ebefc84b5d9c489f4222161cf2',
      apiUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`,
      getResponse = (response) => response.json(),
      resourcesList = document.getElementById('newsResources'),
      articlesList = document.getElementById('resourceOutput'),
      button = document.getElementById('closeButton'),
      addHidden = (elem) => elem.classList.add('hidden'),
      removeHidden = (elem) => elem.classList.remove('hidden');


  fetch(apiUrl)
  .then(getResponse)
  .then(resources => {
    resources.sources.forEach(source => {
      let newResourceItem = new NewsResource(source);

      newResourceItem.createLink();
    });
    return resources.sources.id;
  });

  let resourceClick = (e) => {
    e.preventDefault();

    const id = e.target.closest('li').id,
        resourceUrl = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${apiKey}`;

    fetch(resourceUrl)
    .then(getResponse)
    .then(source => {
      source.articles.forEach(article => {
        let newArticle = new ResourcePage(article);

        addHidden(resourcesList);
        newArticle.createPage();
        removeHidden(button);
      });
    });
  };

  let buttonClick = (e) => {
    removeHidden(resourcesList);
    articlesList.innerHTML = '';
  };

  resourcesList.addEventListener('click', resourceClick, false);
  button.addEventListener('click', buttonClick, false);
})();