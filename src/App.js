
import './App.css';

function App() {
    // hello
    console.log("env", process.env.REACT_APP_KEY);
    console.log("env azure", process.env.REACT_APP_AZURE_TEST_FOO);
  return (
    <div className="App">
        <p>Hello  {process.env.REACT_APP_KEY}</p>
    </div>
  );
}

export default App;

