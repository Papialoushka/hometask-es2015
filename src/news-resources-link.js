export default class NewsResource {
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
    resource.insertAdjacentHTML('afterBegin', `<h2><a href=${this.url} title="Click to read"><img src=${this.logo} alt=${this.title}>${this.title}</a></h2><p>${this.description}</p>`);

    return document.getElementById('newsResources').appendChild(resource);
  }
}