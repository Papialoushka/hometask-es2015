class Button {
  constructor() {
    this.state = 'hidden';
    this.id = 'closeButton';
    this.content = 'Back to resources';
  }

  create() {
    const button = document.createElement('button');

    button.className = this.state;
    button.id = this.id;
    button.innerHTML = this.content;
    return button;
  }
}

const buttonReturn = new Button().create();

export default buttonReturn;
