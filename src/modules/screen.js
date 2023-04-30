import { keyboardRow } from "./keyboardRow.js";
import { keysData } from "./keysData.js";

(function () {
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

  if (document.onkeydown === 'Shift') {
    keyBoard.appendChild(keyboardRow(keysData.shiftFirstRowEn));
    keyBoard.appendChild(keyboardRow(keysData.shiftSecondRowEn));
    keyBoard.appendChild(keyboardRow(keysData.shiftThirdRowEn));
    keyBoard.appendChild(keyboardRow(keysData.shiftFourthRowEn));
    keyBoard.appendChild(keyboardRow(keysData.fifthRow));
  }

  keyBoard.appendChild(keyboardRow(keysData.firstRow));
  keyBoard.appendChild(keyboardRow(keysData.secondRowEn));
  keyBoard.appendChild(keyboardRow(keysData.thirdRowEn));
  keyBoard.appendChild(keyboardRow(keysData.fourthRowEn));
  keyBoard.appendChild(keyboardRow(keysData.fifthRow));

  const Keys = document.querySelectorAll('.keyboard__key');

  document.onkeydown = (e) => {
    for (let key of Keys) {
      if (e.key === key.innerText) {
        key.classList.add('active');
      }

      if (e.key === 'CapsLock') {
        key.classList.toggle('.caps-active');
      }
    }

    console.log(textArea);

    textArea.innerText += e.key;
  }

  document.onkeyup = (e) => {
    for (let key of Keys) {
      if (e.key === key.innerText) {
        key.classList.remove('active');
      }
    }
  }
})();



