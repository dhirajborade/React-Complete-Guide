import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Dhiraj", age: 28 },
      { name: "Prajakta", age: 24 },
      { name: "Xiaoxiao", age: 24 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Prajakta", age: 24 },
        { name: "Xiaoxiao", age: 24 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Dhiraj", age: 28 },
        { name: event.target.value, age: 24 },
        { name: "Xiaoxiao", age: 24 }
      ],
      showPersons: false
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
              My Hobbies: Driving
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Dhi")}
              changed={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
