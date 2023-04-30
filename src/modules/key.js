const key = (symbol) => {
    const key = document.createElement('div');
    key.className = 'key';

    console.log(symbol);

    key.innerText = symbol;

    return key;
}

export { key };