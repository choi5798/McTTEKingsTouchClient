import {useState} from "react";
import {SummaryItems} from "./SummaryItems";

export function Summary({onSubmitClicked, orderItems, totalPrice}) {
    const [order, setOrder] = useState({
        email: '', address: '', postcode: ''
    });

    const handleEmailChanged = e => {
        setOrder({...order, email: e.target.value});
    }
    const handleAddressChanged = e => {
        setOrder({...order, address: e.target.value});
    }

    const handlePostcodeChanged = e => {
        setOrder({...order, postcode: e.target.value});
    }

    const handleSubmit = e => {
        if (order.email === '' || order.address === '' || order.postcode === '') {
            alert('비어있는 칸이 있습니다!');
        } else {
            onSubmitClicked(order);
        }
    }

    return (
        <>
            {orderItems.map(v => <SummaryItems key={v.burgerId} burgerName={v.burgerName}
                                               quantity={v.quantity}></SummaryItems>)}
            <h5>합계: {totalPrice}원</h5>
            <form>
                <div className="mb-3">
                    <label className="form-label">이메일</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                           onChange={handleEmailChanged} value={order.email}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">주소</label>
                    <input type="text" className="form-control" onChange={handleAddressChanged} value={order.address}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">우편번호</label>
                    <input type="text" className="form-control" onChange={handlePostcodeChanged} value={order.postcode}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}