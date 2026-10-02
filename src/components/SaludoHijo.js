function Saludohijo(props){
    
    //NECESITAMOS CAPTURAR EN UNA VARIABLE EL MÉTODO DEL PROPS DEL MÉTODO PADRE.
    let ejecutarPadre = props.metodoPadre;
    
    return(
        <div>
            <h1>Saludo del hijo.</h1>
            <button onClick={() => ejecutarPadre("Hugo" + props.idhijo)}>Llama al padre</button>

        </div>
    )
}

export default Saludohijo;