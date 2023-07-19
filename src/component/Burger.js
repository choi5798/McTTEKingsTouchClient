export function Burger(props) {
    const burgerId = props.burgerId;
    const burgerName = props.burgerName;
    const price = props.price;
    const burgerType = props.burgerType;
    const burgerCompany = props.burgerCompany;

    const handleAddButtonClicked = e => {
        props.onAddClick(burgerId);
    }

    return (
        <>
            <td>{burgerName}</td>
            <td>{price}</td>
            <td>{burgerType}</td>
            <td>{burgerCompany}</td>
            <td className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button" onClick={handleAddButtonClicked}>추가</button>
            </td>
        </>
    );
}