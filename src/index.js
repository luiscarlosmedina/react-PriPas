import React from "react"
import ReactDOM from "react-dom/client"
import { Boton } from "./componentes/Boton"
import "./estilo/Dsg.css"
import { Title } from "./componentes/Titulo"
import {Label} from "./componentes/Label"
import {Numero} from "./componentes/Numero";
import Tabla from "./componentes/Tb"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
    <div className="bloque">
        <Title text="Imprime numeros del 1 al 50" />
        <div className="estante">
            <div className="cajon">
                <Boton text="Imprimir" onclick={()=>{Numero()}}/>
            </div>
            <div className="cajon">
                <Label text="resultado"/>
                <div id="E1">
                <React.StrictMode>
        <Tabla />
    </React.StrictMode>,
                </div>
            </div>
        </div>
    </div>
    
</>)