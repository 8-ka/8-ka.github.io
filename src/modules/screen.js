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

  const textInput = document.createElement('input');
  textInput.className = 'text-area';

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

  const shiftKeyboard = () => {
    keyBoard.replaceChild(shiftFirstRowEn, firstRow);
    keyBoard.replaceChild(shiftSecondRowEn, secondRowEn);
    keyBoard.replaceChild(shiftThirdRowEn, thirdRowEn);
    keyBoard.replaceChild(shiftFourthRowEn, fourthRowEn);
  }


  const keys = document.querySelectorAll('.keyboard__key');
  const space = document.querySelector('.space');
  const backspace = document.querySelector('.backspace');
  const shift = document.querySelector('.shift');
  const alt = document.querySelector('.alt');
  const capslock = document.querySelector('.capslock');
  const enter = document.querySelector('.enter');
  const textArea = document.querySelector('.text-area');

  const enterDown = () => {
    console.log('f');
    const content = textInput.innerText;
    const newContent = content + '\n';

    textInput.innerText = newContent;
  }

  console.log(enter);

  enter.addEventListener('click', enterDown);
  enter.addEventListener('keydown', enterDown);

  window.addEventListener('keydown', (e) => {
    // console.log(e.code);
    for (let key of keys) {
      // console.log(key.attributes);
      if (e.key.toLowerCase() === key.attributes.data.value) {
        key.classList.add('active');
      }
    }

    if (e.key === 'CapsLock') {
      isCapsLocked = !isCapsLocked;
      
      capslock.classList.toggle('caps-active');
      // isCapsLocked ? shiftKeyboard() : 
    }

    if (e.key === 'Control' && e.shiftKey) {
      isEnLang = !isEnLang;
      isEnLang ? fillKeyboardEn() : fillKeyboardRu();
    }

    if (e.key === 'Shift') {
      isEnLang ? shiftKeyboard() : shiftKeyboardRu();
    }


    textInput.innerText += e.key;
  });

  window.addEventListener('keyup', (e) => {
    for (let key of keys) {
      if (e.key.toLowerCase() === key.attributes.data.value) {
        key.classList.remove('active');
      }
    }
  });

  // const backspace = () => {
  //   textInput.value;
  // }
})();


