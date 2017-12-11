import Entity from './create-entity';

export default class NewsResource extends Entity {
  constructor(obj) {
    super(obj);
    this.logo = `https://icons.better-idea.org/icon?url=${this.url}&size=80..120..200`;
    this.attrTitle = 'Click to read';
  }
}
