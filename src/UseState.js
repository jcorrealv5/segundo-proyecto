import { useState } from "react"


//reglas de los hooks:
//no puede estar dentro de nada, nivel mas alto, en loops
//solo se llaman en dos partes_
//Compoenente de react
//custom hooks
//cuando creamos un custom hook debe empezar por Use**
// class App extends Component{
//     state = {contador : 0}
//     incrementar=()=>{
//         this.setState({contador: this.state.contador + 1})
//     }
//     render(){
//         return(
//             <div>
//                 contador: {this.state.contador}
//                 <button onClick={this.incrementar}>
//                     Incrementar
//                 </button>
//             </div>
//         )
//     }
// }
const useContador =(incial) =>{
    const[contador,setContador]= useState(incial)
    const incrementar=()=>{
     setContador(contador + 1)
    }
    return[contador,incrementar]
}
const App = ()=>{
    const[contador,incrementar] = useContador(0)
   return(
       <div>
           contador:{contador}
           <button onClick={incrementar}>
               Incrementar
            </button>
        </div>
   )
}

export default App