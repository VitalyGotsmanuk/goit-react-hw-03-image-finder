
export const Button = ({
    handleClick
}) => {
    return (
        <button
            onClick={handleClick}
            type="click"
            name="page"
            className="button">Load more</button>  
    )
}