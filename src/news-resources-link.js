class NewsResource {
  constructor(news) {
    this.url = news.url;
    this.title = news.name;
    this.description = news.description;
    this.logo = `https://icons.better-idea.org/icon?url=${this.url}&size=80..120..200`;
    this.id = news.id;
  }

  createLink() {
    const resource = document.createElement('li');

    resource.className = 'news-resource';
    resource.id = this.id;
    resource.insertAdjacentHTML('afterBegin', `<h2><a href=${this.url} title="Click to read"><img alt=${this.title} src=${this.logo}>${this.title}</a></h2><p>${this.description}</p>`);

    return document.getElementById('newsResources').appendChild(resource);
  }
}

class ResourcePage extends NewsResource {
  constructor(news) {
    super(news);
    this.header = news.source.name;
    this.title = news.title;
    this.logo = news.urlToImage;
    this.date = new Date(news.publishedAt).toLocaleDateString();
  }

  createPage() {
    const article = document.createElement('li'),
      list = document.getElementById('resourceOutput');

    article.className = 'article';
    article.insertAdjacentHTML('afterBegin', `<h3><a href=${this.url} title="Go to an external resource to read"><img src=${this.logo}>${this.title}</a></h3><p>${this.description}</p><p>${this.date}</p>`);

    return list.appendChild(article);
  }
}

(function () {
  const apiKey = '59c232ebefc84b5d9c489f4222161cf2',
        apiUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`,
        resourcesList = document.getElementById('newsResources'),
        articlesList = document.getElementById('resourceOutput'),
        button = document.getElementById('closeButton'),
        header = document.getElementById('mainContent'),
        getResponse = (response) => response.json(),
        addHidden = (elem) => elem.classList.add('hidden'),
        removeHidden = (elem) => elem.classList.remove('hidden');


  fetch(apiUrl)
    .then(getResponse)
    .then(resources => {
      resources.sources.forEach(source => {
        const newResourceItem = new NewsResource(source);

        newResourceItem.createLink();
      });
      return resources.sources.id;
    });

  const resourceClick = (e) => {
    e.preventDefault();

    const id = e.target.closest('li').id,
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