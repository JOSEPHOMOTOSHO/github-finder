import React, {Component} from "react";
import './App.css';


class App extends Component {
  render(){//learn lifecycle nmethods to understand this render method well
    return (
      <div className="App">
        <h1>Hello Motor</h1>
      </div>
    );
  }
}


/*
Below is a functional component and above is a class based component

function App() {
  return (
    <div className="App">
      <h1>Hello Motor</h1>
    </div>
  );
}*/

export default App;
