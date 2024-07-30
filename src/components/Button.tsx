type ButtonProps = {
    placeholder: string,
    type: 'button' | 'submit' | 'reset',
}
function Button({ placeholder, type = 'button', }: ButtonProps) {
    return (
        <button type={type}>
            {placeholder}
        </button>
    )
}

export default Button