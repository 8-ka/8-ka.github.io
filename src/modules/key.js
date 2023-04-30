const key = (symbol) => {
    const key = document.createElement('div');
    key.className = 'keyboard__key';
    key.classList.add(symbol.toLowerCase());

    key.innerText = symbol === 'CapsLock'
        ? 'CL' : symbol === 'Backspace' 
        ? '' : symbol === 'ArrowUp'
        ? '' : symbol === 'ArrowDown'
        ? '' : symbol === 'ArrowLeft'
        ? '' : symbol === 'ArrowRight'
        ? '' : symbol;

    return key;
}

export { key };