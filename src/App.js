import logo from './logo.svg';
import './App.css';
import Generater_random from './Generater_random';
import ReactErrorBoundry from './ReactErrorBoundry';
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from 'react';

function App() {
  const [counter , setCounter] = useState(0)
  const [counter2 , setCounter2] = useState(0)

  const errorFallback = (msg)=>{
    console.log(msg.error)
    return <h1 style={{color:'red'}}>{msg.error.message}</h1>    
  }

  

  return (
    <div className="App">
      <button onClick={()=>setCounter(!counter)}>Click to Generate Number</button>
      <ReactErrorBoundry>
        <Generater_random counter = {counter}/>
      </ReactErrorBoundry>

      <div>
        <button onClick={()=>setCounter2(!counter2)}>Click to Generate Number</button>
        <ErrorBoundary
          FallbackComponent={errorFallback}
        >
          <Generater_random counter = {counter2}/>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
