import NewsResource from './news-resources-link';

export default class ResourcePage extends NewsResource {
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