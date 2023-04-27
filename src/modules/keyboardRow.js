import { key } from "./key";

const keyboardRow = () => {
    return (
        <div class = "keyboard__row">
            {key(['1'])}
        </div>
    )
}

export { keyboardRow };