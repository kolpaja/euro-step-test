const Button = ({size,color,text,type}) => {
    // console.log(props);
    return (
        <button type={type} className={`er-btn er-btn-${size} er-btn-${color}`}>
            {text}
        </button>
    )
}

export default Button;