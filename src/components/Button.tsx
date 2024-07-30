type ButtonProps = {
    placeholder: string,
    type: 'button' | 'submit' | 'reset',
}
function Button({ placeholder, type = 'button', }: ButtonProps) {
    return (
        <button className="border-2 rounded-3xl px-8 p-2" type={type}>
            {placeholder}
        </button>
    )
}

export default Button