export function SummaryItems({burgerName, quantity}) {
    return (
        <>
            <div className="row container-fluid">
                <h6 className="p-0">{burgerName} <span className="badge bg-dark text-">{quantity}개</span></h6>
            </div>
        </>
    )
}