
import './App.css';

function App() {
    // hello
    console.log("env", process.env.REACT_APP_KEY)
  return (
    <div className="App">
        <p>Hello  {process.env.REACT_APP_KEY}</p>
    </div>
  );
}

export default App;
