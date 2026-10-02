import Matematicas from "./Matematicas";

function PadreMatematicas(){

    const dobleNumero = (num) =>{
        let doble = parseInt(num) * 2;
        console.log(doble)
    }

    const tripleNumero = (num) =>{
        let triple = parseInt(num) * 3;
        console.log(triple)
    }

    return(
        <div>
            <h1>Comunicación entre Padres e Hijos</h1>

            <Matematicas numero = "4" metodoDoble = {dobleNumero} metodoTriple = {tripleNumero}/>
        </div>
    )
}

export default PadreMatematicas;