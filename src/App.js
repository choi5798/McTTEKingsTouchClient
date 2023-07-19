import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import {BurgerList} from "./component/BurgerList";
import {Summary} from "./component/Summary";

function App() {
    const [burgers, setBurgers] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/burgers')
            .then(response => setBurgers(response.data));
    }, []);

    const handleAddButtonClicked = burgerId => {
        const burger = burgers.find(value => value.burgerId === burgerId);
        const found = orderItems.find(item => item.burgerId === burgerId);
        if (found) {
            setOrderItems(orderItems.map(item => {
                if (item.burgerId === burgerId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            }));
        } else {
            setOrderItems([...orderItems, {
                burgerId: burgerId,
                burgerName: burger.burgerName,
                quantity: 1
            }])
        }
        setTotalPrice(totalPrice + burger.price);
    }

    const handleSubmit = async order => {
        if (orderItems.length === 0) {
            alert("아이템을 추가해 주세요!");
        } else {
            await axios.post("http://localhost:8080/api/v1/orders", {
                email: order.email,
                address: order.address,
                postcode: order.postcode,
                orderItems: orderItems.map(value => ({
                    burgerId: value.burgerId,
                    burgerName: value.burgerName,
                    quantity: value.quantity,
                    createdAt: value.createdAt
                }))
            }).then(res => alert("주문 완료!"), err => {
                alert("주문 실패");
                console.error(err);
            });
            window.location.reload();
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div>
                    <img
                        src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg"
                        className="rounded float-start" width="200px" alt="버거 사진"/>
                    <h1>Welcome McTTEKingsTouch!!</h1>
                </div>
                <div>
                    <BurgerList burgers={burgers} onAddClick={handleAddButtonClicked}></BurgerList>
                </div>
                <div>
                    <Summary orderItems={orderItems} onSubmitClicked={handleSubmit} totalPrice={totalPrice}></Summary>
                </div>
            </div>
        </>
    );
}

export default App;
