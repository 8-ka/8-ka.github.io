import { keyboardRow } from "./keyboardRow.js";
import { keysData } from "./keysData.js";

(function () {
  console.log(keyboardRow);
  const container = document.createElement('div');
  container.className = 'container';

  let isCapsLocked = false;
  let isEnLang = true;

  const body = document.querySelector('body');
  body.appendChild(container);

  const textInput = document.createElement('textarea');
  textInput.className = 'text-area';
  textInput.readOnly = true;

  const keyBoard = document.createElement('div');
  keyBoard.className = 'keyboard';
  
  container.appendChild(textInput);
  container.appendChild(keyBoard);
  
  const firstRow = keyboardRow(keysData.firstRow);
  const secondRowEn = keyboardRow(keysData.secondRowEn);
  const secondRowRu = keyboardRow(keysData.shiftSecondRowRu);
  const thirdRowEn = keyboardRow(keysData.thirdRowEn);
  const thirdRowRu = keyboardRow(keysData.thirdRowRu);
  const fourthRowEn = keyboardRow(keysData.fourthRowEn);
  const fourthRowRu = keyboardRow(keysData.fourthRowRu);
  const fifthRow = keyboardRow(keysData.fifthRow);
  const shiftFirstRowEn = keyboardRow(keysData.shiftFirstRowEn);
  const shiftFirstRowRu = keyboardRow(keysData.shiftFirstRowRu);
  const shiftSecondRowEn = keyboardRow(keysData.shiftSecondRowEn);
  const shiftSecondRowRu = keyboardRow(keysData.shiftSecondRowRu);
  const shiftThirdRowEn = keyboardRow(keysData.shiftThirdRowEn);
  const shiftThirdRowRu = keyboardRow(keysData.shiftThirdRowRu);
  const shiftFourthRowEn = keyboardRow(keysData.shiftFourthRowEn);
  const shiftFourthRowRu = keyboardRow(keysData.shiftFourthRowRu);
  
  const fillKeyboard = () => {
    keyBoard.appendChild(firstRow);
    keyBoard.appendChild(secondRowEn);
    keyBoard.appendChild(thirdRowEn);
    keyBoard.appendChild(fourthRowEn);
    keyBoard.appendChild(fifthRow);
  }
  
  fillKeyboard();

  const fillKeyboardRu = () => {
    keyBoard.replaceChild(secondRowRu, secondRowEn);
    keyBoard.replaceChild(thirdRowRu, thirdRowEn);
    keyBoard.replaceChild(fourthRowRu, fourthRowEn);
  }

  const fillKeyboardEn = () => {
    keyBoard.replaceChild(secondRowEn, secondRowRu);
    keyBoard.replaceChild(thirdRowEn, thirdRowRu);
    keyBoard.replaceChild(fourthRowEn, fourthRowRu);
  }

  const shiftKeyboardRu = () => {
    keyBoard.replaceChild(shiftFirstRowRu, firstRow);
    keyBoard.replaceChild(shiftSecondRowRu, secondRowRu);
    keyBoard.replaceChild(shiftThirdRowRu, thirdRowRu);
    keyBoard.replaceChild(shiftFourthRowRu, fourthRowRu);
  }

  const unShiftKeyboardRu = () => {
    keyBoard.replaceChild(firstRow, shiftFirstRowRu);
    keyBoard.replaceChild(secondRowRu, shiftSecondRowRu);
    keyBoard.replaceChild(thirdRowRu, shiftThirdRowRu);
    keyBoard.replaceChild(fourthRowRu, shiftFourthRowRu);
  }

  const shiftKeyboard = () => {
    keyBoard.replaceChild(shiftFirstRowEn, firstRow);
    keyBoard.replaceChild(shiftSecondRowEn, secondRowEn);
    keyBoard.replaceChild(shiftThirdRowEn, thirdRowEn);
    keyBoard.replaceChild(shiftFourthRowEn, fourthRowEn);
  }

  const unShiftKeyboard = () => {
    keyBoard.replaceChild(firstRow, shiftFirstRowEn);
    keyBoard.replaceChild(secondRowEn, shiftSecondRowEn);
    keyBoard.replaceChild(thirdRowEn, shiftThirdRowEn);
    keyBoard.replaceChild(fourthRowEn, shiftFourthRowEn);
  }


  const keys = document.querySelectorAll('.keyboard__key');
  const space = document.querySelector('.space');
  const backspace = document.querySelector('.keyboard__key backspace');
  const shiftLeft = document.querySelector('.shiftleft');
  const shiftRight = document.querySelector('.shiftright');
  const alt = document.querySelector('.alt');
  const capslock = document.querySelector('.capslock');
  const enter = document.querySelector('.enter');
  const textArea = document.querySelector('.text-area');

  window.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key.length <= 1) {
      textInput.value += e.key;
    }

    for (let key of keys) {
      console.log(e.key);
      if (e.key === key.attributes.data.value) {
        key.classList.add('active');
      }
    }

    if (e.key === 'Enter') {
      const content = textInput.value;
      const newContent = content + '\n';

      textInput.value = newContent;
    }

    if (e.key === 'Backspace') {
      textInput.value = textInput.value.slice(0, -1);
      // backspace.classList.add('active');
    }

    if (e.key === 'CapsLock') {
      isCapsLocked = !isCapsLocked;
      capslock.classList.toggle('caps-active');
      capslock.classList.add('active')
      
      if (isCapsLocked) {
        shiftKeyboard();
      } else {
        unShiftKeyboard();
      }
    }

    if (e.key === 'Control' && e.shiftKey) {
      isEnLang = !isEnLang;
      isEnLang ? fillKeyboardEn() : fillKeyboardRu();
    }

    if (e.key === 'Shift') {
      isEnLang ? shiftKeyboard() : shiftKeyboardRu();
    }
  });

  window.addEventListener('keyup', (e) => {
    for (let key of keys) {
      if (e.key === key.attributes.data.value) {
        key.classList.remove('active');
      }
    }

    if (e.key === 'Shift') {
      isEnLang ? unShiftKeyboard() : unShiftKeyboardRu();
    }
  });
})();


