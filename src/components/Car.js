import { useState } from "react";

function Car(props) {
    //Variables para averiguear el estado del coche
    let [estado, setEstado] = useState(false);
    let [velocidad, setVelocidad] = useState(0)

    //Objeto coche con los datos de props
    let coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadMaxima),
        aceleracion: parseInt(props.aceleracion)
    }

    const comprobarEstado = () => {
        if (estado === true) {
            return (<h1 style={{ color: "blue" }}>Arrancado</h1>)
        } else {
            return (<h1 style={{ color: "red" }}>Aparcado</h1>)
        }
    }


    const acelerarCoche = () => {

        if (estado == false) {
            alert("El coche está apagado")
            setVelocidad(0)
        } else {
            if (velocidad >= coche.velocidadMaxima) {
                setVelocidad(coche.velocidadMaxima)
            } else {
                setVelocidad(velocidad + 1)
            }
        }
    }

    return (
        <div>
            <h1>{coche.marca} {coche.modelo}</h1>
            {/* Estado del coche */}
            {comprobarEstado()}

            <h2>Velocidad {velocidad}</h2>

            <button onClick={() => { setEstado(!estado) }}>On/Off</button>
            <button onClick={() => acelerarCoche()}>Acelerar</button>




        </div>
    )
}

export default Car;