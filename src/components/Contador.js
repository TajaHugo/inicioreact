import React, { useState } from "react"

function Contador() {

    const [numero, setNumero] = useState(0)

    //No usar ++, interfiere con el estado de la página
    const sumar = () => {
        setNumero(numero + 1)
    }

    //No usar --, interfiere con el estado de la página
    const restar = () => {
        setNumero(numero - 1)
    }

    const resetear = () => {
        setNumero(0)
    }

    return (
        <div>
            <h1>Contador</h1>

            <div style={{ display: "flex", gap:20, alignItems: "center" }}>
                <button style={{height:20}} onClick={sumar}>+</button>
                <h2>{numero}</h2>
                <button style={{height:20}} onClick={restar}>-</button>
            </div>
            <button onClick={resetear}>resetear</button>
        </div>
    )
}

export default Contador