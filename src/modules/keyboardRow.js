import { key } from "./key.js";

const keyboardRow = (btnQty) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';

    for (let i = 0; i < btnQty.length; i++) {
        keyboardRow.appendChild(key(btnQty[i]));
    }
    return keyboardRow;
}

export { keyboardRow };