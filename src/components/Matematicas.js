function Matematicas(props) {
    let {numero, metodoDoble, metodoTriple} = props;

    return (
        <div>
            <button onClick={() => metodoDoble(numero) }>Doble</button>
            <button onClick={() => metodoTriple(numero) }>Triple</button>

        </div>
    )
}

export default Matematicas;