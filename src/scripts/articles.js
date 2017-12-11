import Entity from './create-entity';

export default class ResourcePage extends Entity {
  constructor(obj) {
    super(obj);
    this.title = obj.title;
    this.id = obj.source.id;
    this.logo = obj.urlToImage;
    this.date = new Date(obj.publishedAt).toLocaleDateString();
    this.attrTitle = 'Go to an external resource to read';
    this.header = obj.source.name;
  }
}
