const key = (symbol) => {
    const key = document.createElement('div');
    key.className = 'keyboard__key';
    key.classList.add(symbol.toLowerCase());
    key.setAttribute('data', `${symbol}`);

    key.innerText = symbol === 'CapsLock'
        ? 'CL' : symbol === 'Backspace' 
        ? '' : symbol === 'ArrowUp'
        ? '' : symbol === 'ArrowDown'
        ? '' : symbol === 'ArrowLeft'
        ? '' : symbol === 'ArrowRight'
        ? '' : symbol === 'ControlLeft'
        ? 'Ctrl' : symbol === 'ControlRight'
        ? 'Ctrl' : symbol === 'AltLeft'
        ? 'Alt' : symbol === 'AltRight'
        ? 'Alt' : symbol === 'ShiftLeft'
        ? 'Shift' : symbol === 'ShiftRight'
        ? 'Shift' : symbol;

    return key;
}

export { key };