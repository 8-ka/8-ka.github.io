const key = (symbols) => {
    return (symbols.map((symbol => {
        <div class = "key">
            {symbol}
        </div>
    })))
}

export { key };