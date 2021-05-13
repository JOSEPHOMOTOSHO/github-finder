import React, {Component} from "react";
import './App.css';


class App extends Component {
  foo = () => " BaBatope";
  render(){//learn lifecycle methods to understand this render method well
    const name = "Benjamin Omotosho";
    const loading =  true;
    const showname = true;
    if(loading){
      return <h4>Loading...</h4>
    }
    return (
      <div className = "App">
      <h1>Hello {showname && name + this.foo()}</h1>
      </div>
    );
  }
}

export default App;







/*
3---------------------LEARNING Expressions and Conditionals(descending order of learning)-------------------------------------------
v)Displaying stuff with conditionals(if..else)

class App extends Component {
  foo = () => " BaBatope";
  render(){//learn lifecycle methods to understand this render method well
    const name = "Benjamin Omotosho";
    const loading =  true;
    const showname = true;
    // below i used conditionals (if..else) to make things hapen dynamically //
    if(loading){
      return <h4>Loading...</h4>
    }
    return (
      <div className = "App">
      <h1>Hello {showname && name + this.foo()}</h1>
      </div>
    );
  }
}

iv)Displaying stuff with conditionals pt 2

class App extends Component {
  foo = () => " BaBatope";
  render(){
    const name = "Benjamin Omotosho";
    const loading =  false;
    const showname = false;
    return (
      <div className = "App">
      //you can make stuff happen conditionally by using logical operators like || and && //
       {loading ? <h4>Loading...</h4>: <h1>Hello {showname && name + this.foo()}</h1>}
      </div>
    );
  }
}

iii) Displaying stuff with a condition

class App extends Component {
  foo = () => " BaBatope";
  render(){
    const name = "Benjamin Omotosho";
    const loading =  true;
    return (
      <div className = "App">
      //using ternary and the curly braces {} i displayed something dynamically//
       {loading ? <h4>Loading...</h4>: <h1>Hello {name + this.foo()}</h1>}
      </div>
    );
  }
}
ii)
class App extends Component {
  foo = () => " BaBatope"; //you can make a method for the class
  render(){//learn lifecycle methods to understand this render method well
    const name = "Benjamin Omotosho";
    return (
      <div className = "App">
        <h1>Hello {name + this.foo()}</h1>//can call the method inside the braces {}  using this keyword
        <h2>Beans</h2>
      </div>
    );
  }
}


i) 
class App extends Component {
  render(){
    const name = "Benjamin Omotosho"; //declare variables outside the return 
    const foo = () => name + " Bar";//declare variables outside the return 
    return (
      <div className = "App">
        <h1>Hello {foo()}</h1>//make use of variables or functions inside the curly braces {}
        <h2>Beans</h2>
      </div>
    );
  }
}








1---------------------LEARNING types of components-------------------------------------------
note: [
to use the Component in the "...extends Component" of class based component you must have imported it from react 
library like so:
"import React, {Fragment,Component} from "react";"
]

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <h1>Hello Motor</h1>
        <h2>Beans</h2>
      </React.Fragment>
    );
  }
}

Below is a functional component and above is a class based component

function App() {
  return (
    <div className="App">
      <h1>Hello Motor</h1>
    </div>
  );
}

2a---------------------LEARNING Jsx-------------------------------------------
return (
      <div className="App">
        <h1>Hello Motor</h1>
      </div>
    );

    The content/syntax within the return parenthesis is called 
    jsx(javascript syntax extension). It looks like html but underground is still 
    js. The jsx must have one parent i.e <div></div>.
    If you put other contents outside that parent you get an error

2b    ---------------------LEARNING Fragments-------------------------------------------
to use Fragment you must have imported into your library like so
import React, {Fragment,Component} from "react";

return (
      <Fragment>
        <h1>Hello Motor</h1>
      </Fragment>
    );

*/


