type InputType = {
    type: string
    name: string
    value: string
    placeholder: string
    styles?: { [key: string]: string }
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Input({ type = 'text', value = '', name, placeholder, styles = {}, onChange }: InputType) {
    return (
        <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            style={styles}
            onChange={onChange}
        />
    )
}

export default Input