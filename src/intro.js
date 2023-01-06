const impura =() => new Date().toLocaleString()

console.log(impura())

const MiComponente =({miProps})=>{
  return(
    <div>
      Nombre : {miProps}
    </div>
  )
}

const App = ()=>{
  return(
    <MiComponente miProps={'Chanchito Feliz'}/>
  )
}

export default App
