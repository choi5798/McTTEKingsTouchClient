import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/burgers')
            .then(response => setBurgers(response.data));
    }, []);


    return (
        <>
            <div>
                <h1>Welcome McTTEKingsTouch!!</h1>
            </div>
            <div>
                {burgers.map(value =>
                    <p>{value.burgerName}</p>
                )}
            </div>
        </>
    );
}

export default App;
