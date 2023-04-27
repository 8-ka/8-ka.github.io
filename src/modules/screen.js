import { keyboardRow } from "./keyboardRow";

(function() {
    const container = document.createElement('div');
    container.className = 'container';

    const body = document.querySelector('body');
    body.appendChild(container);

    const textArea = document.createElement('input');
    textArea.className = 'text-area';

    const keyBoard = document.createElement('div');
    keyBoard.className = 'keyboard';

    container.appendChild(textArea);
    container.appendChild(keyBoard);

    // keyBoard.appendChild(keyboardRow());
})();