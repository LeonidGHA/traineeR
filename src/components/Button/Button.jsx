function Button({ title = 'not tittle', type = 'button'}) {
    return (<button type={type}>{title}</button>)
}

export default Button;