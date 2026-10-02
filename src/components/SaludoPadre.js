import Saludohijo from "./SaludoHijo";
function Saludopadre(){
    //Creamos un método para que el hijo se comunique con el padre.
    const metodoPadre = (nombre) =>{
        console.log("Hola, " + nombre);
    }

    return(
        <div>
            <h1>Saludo del padre.</h1>
            {/* ENVIAMOS A LOS HIJOS EL METODO PARA QUE PUEDA UTILIZAR EL PARENT */}
            <Saludohijo idhijo=" 1 " metodoPadre = {metodoPadre}/>
            <Saludohijo idhijo=" 2 " metodoPadre = {metodoPadre}/>

        </div>
    )
}

export default Saludopadre;