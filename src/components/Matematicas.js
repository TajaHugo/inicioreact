function Matematicas(props) {
    let {metodoDoble, metodoTriple} = props;

    return (
        <div>
            <button onClick={() => metodoDoble(7) }>Doble</button>
            <button onClick={() => metodoTriple(6) }>Triple</button>

        </div>
    )
}

export default Matematicas;