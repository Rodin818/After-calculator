// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React , {useState} from "react"

const App = () => {
    const [temperatureValue , setTemperatureValue ] = useState(10)
    const [temperatureColor , setTemperatureColor] = useState("cold")

    const increaseTemp = () => {
      const Ctemp = temperatureValue + 1
      if(Ctemp === 31) return;
      setTemperatureValue(Ctemp)

      if(Ctemp >= 15){
        setTemperatureColor("hot")
      }
    }

    const decreaseTemp = () => {
      const Htemp = temperatureValue - 1
      if(Htemp === -1) return;
      setTemperatureValue(Htemp)
    
      if(Htemp <= 10){
        setTemperatureColor("cold")
      }
    }

  return (
    <div className = "app-container">
      <div className = "temperature-display-container">
        <div className= {`temperature-display ${temperatureColor}`}>{temperatureValue}°</div>
      </div>
      <div className="button-container">
          <button onClick = {() => increaseTemp()}>+</button>
          <button onClick = {() => decreaseTemp()}>-</button>
      </div>
    </div>
  )

}

export default App ;


















