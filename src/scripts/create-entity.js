export default class Entity {
  constructor(obj) {
    this.url = obj.url;
    this.title = obj.name;
    this.description = obj.description;
    this.id = obj.id;
    this.attrTitle = 'Click';
  }

  createList(listName, listId) {
    const listItem = document.createElement('li'),
          list = document.getElementById(listId);

    listItem.className = listName;
    listItem.insertAdjacentHTML('afterBegin', `<h2><a href=${this.url} id=${this.id} title=${this.attrTitle}><img src=${this.logo} alt=${this.title}>${this.title}</a></h2><p>${this.description}</p>`);

    return list.appendChild(listItem);
  }
}
