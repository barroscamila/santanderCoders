import { useState } from "react"

export default function Contador() {

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if (contador > 5) {
        return (
            <div>
            <h1>Valor muito alto!</h1>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
            </div>
        )
        
    }

    return (
        <div>
            <h2>Meu contador: {contador}</h2>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )
}



/* { contador > 9 ? <h3>Valor muito grande</h3> : null} */