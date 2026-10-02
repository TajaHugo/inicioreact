
import logo from './../../logo.svg';
import './Sumarnumeros.css';

function Sumarnumeros(props) {

    const sumadenumeros = () => {
        //let result = numero1 + numero2;
        //Usando props para comunicar hijo con el padre y biceversa.
        let result =parseInt(props.numero1) + parseInt(props.numero2)
        console.log(result)
    }
    return (
        <div className='container'>

            <h1>Suma números {props.numero1} y {props.numero2}</h1>
            <img src={logo}></img>
            <div className='sumas abs'>
                <button onClick={() => sumadenumeros()}>Suma {props.numero1} + {props.numero2} </button>
            </div>

        </div>
    )
}
export default Sumarnumeros;