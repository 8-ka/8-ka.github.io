import { keyboardRow } from "./keyboardRow.js";
import { keysData } from "./keysData.js";

(function() {
    console.log(keyboardRow);
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

    keyBoard.appendChild(keyboardRow(keysData.firstRow));
    keyBoard.appendChild(keyboardRow(keysData.secondRowEn));
    keyBoard.appendChild(keyboardRow(keysData.thirdRowEn));
    keyBoard.appendChild(keyboardRow(keysData.fourthRowEn));
    keyBoard.appendChild(keyboardRow(keysData.fifthRow));
})();