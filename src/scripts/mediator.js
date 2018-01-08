class Mediator {
  publish() {
    this.createListItem = function (listItemName, listId) {
      const listItem = document.createElement('li');
      const list = document.getElementById(listId);

      listItem.className = listItemName;
      listItem.insertAdjacentHTML('afterBegin', `<h2><a href=${this.url} id=${this.id} title=${this.attrTitle}>${this.title}</a></h2><p>${this.description}</p>`);

      list.appendChild(listItem);
    };
    return this;
  };

  installTo(obj) {
    obj.publish = this.publish;
  }
}

const mediator = new Mediator();

export default mediator;