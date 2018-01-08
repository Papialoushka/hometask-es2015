import ResourcePage from './articles';

export default class PlainTextResourcePage extends ResourcePage {
  constructor(obj) {
  super(obj);
  }

  createListItem(listName, listId) {
    const listItem = document.createElement('li');
    const list = document.getElementById(listId);

    listItem.className = listName;
    listItem.insertAdjacentHTML('afterBegin', `<h2><a href=${this.url} id=${this.id} title=${this.attrTitle}>${this.title}</a></h2><p>${this.description}</p>`);

    return list.appendChild(listItem);
  }
}
