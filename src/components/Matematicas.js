function Matematicas(props) {
    //Usando el nombre de los props del padre podemos simplificar la variable así
    let {numero, metodoDoble, metodoTriple} = props;

    return (
        <div>
            <button onClick={() => metodoDoble(numero) }>Doble</button>
            <button onClick={() => metodoTriple(numero) }>Triple</button>

        </div>
    )
}

export default Matematicas;