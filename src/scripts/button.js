export default class Button {
  constructor() {
    this.state = 'hidden';
    this.id = 'closeButton';
    this.content = 'Back to resources';
  }

  create() {
    const button = document.createElement('button'),
          buttonWrapper = document.getElementById('buttonWrapper');

    button.className = this.state;
    button.id = this.id;
    button.innerHTML = this.content;

    buttonWrapper.appendChild(button);
    return button;
  }
}
