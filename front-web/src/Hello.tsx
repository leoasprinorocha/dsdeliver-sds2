import { useEffect } from "react";

type Prop = {
    message: string;
}

function Hello({message}: Prop){

    useEffect(() => {
        console.log('componente iniciou');
    }
    ,[]);
    return (
        <h1>Leonardo Asprino Rocha</h1>
    )
}

export default Hello;