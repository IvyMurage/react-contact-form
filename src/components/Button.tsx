type ButtonProps = {
    placeholder: string,
    type: 'button' | 'submit' | 'reset',
}
function Button({ placeholder, type = 'button', }: ButtonProps) {
    return (
        <button className="border-2 text-white rounded-3xl my-8 px-8 p-2" type={type}>
            {placeholder}
        </button>
    )
}

export default Button