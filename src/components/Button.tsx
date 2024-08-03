type ButtonProps = {
    placeholder: string,
    styles?: string
    type: 'button' | 'submit' | 'reset',
}
function Button({ placeholder, type = 'button', styles = '' }: ButtonProps) {
    return (
        <button className={`border-2 text-white rounded-3xl my-8 px-8 p-2 ${styles}`} type={type}>
            {placeholder}
        </button>
    )
}

export default Button