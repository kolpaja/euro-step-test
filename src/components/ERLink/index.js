const ERLink = ({ type, text, to }) => {
    return (
        <a
            href={to}
            className={`er-link er-link-${type}`}
            href={`$`}>
            {text}
        </a>
    )
}

export default ERLink;
