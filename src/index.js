import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Sumarnumeros from './components/SumarNumeros/Sumarnumeros';
import Saludopadre from './components/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*     <Sumarnumeros numero1="7" numero2="9"/>
    <Sumarnumeros numero1="77" numero2="99"/>
    <Sumarnumeros numero1="777" numero2="999"/> */}
    {/* <Saludopadre /> */}

    {/* <PadreMatematicas/> */}

    {/* <Contador/> */}
    <Car marca = "Audi" modelo="Q8" velocidadMaxima="240" aceleracion="25"/>
    <Car marca = "Mazda" modelo="MX5" velocidadMaxima="180" aceleracion="15"/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
