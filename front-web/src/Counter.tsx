import { useState } from "react";

function Counter(){

    const [counter, setCouter] = useState(0);

    const handleIncrease = () => {
            setCouter(counter + 1);
    }

    const handleDecrease = () => {
        setCouter(counter - 1);
}


return (
    <div>
        <button onClick={handleIncrease}>Incrementar</button>
        <button onClick={handleDecrease}>Decrementar</button>
        <h1>Valor do contador: {counter} </h1>
    </div>
)

}

export default Counter;