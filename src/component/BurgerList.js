import {Burger} from "./Burger";

export function BurgerList({burgers = [], onAddClick}) {
    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">버거 이름</th>
                    <th scope="col">가격</th>
                    <th scope="col">버거 종류</th>
                    <th scope="col">버거 회사</th>
                </tr>
                </thead>
                <tbody>
                {burgers.map(v =>
                    <tr key={v.burgerId}>
                        <Burger {...v} onAddClick={onAddClick}></Burger>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}