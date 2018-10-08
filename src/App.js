import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {



  state = {  //Remember , inside a Object ; we always decalre anything using Key:Value Pairs
            // But inside a class , we use = so hat we allocate functionality or primitive types to certain variables.

    persons : [
      {name: "Rahul"  , age: 99},
      {name: "Rohit" , age:22}
    ],
    toggleData : true
  }  // We made a Object inside State and then an array of Objects inside persons array


switchEventHandler = (nameChange)=>{

  // console.log("The Button is working");

  this.setState({

                  persons : [
                    {name: nameChange  , age: 9999999},
                    {name: "Rohit" , age:22}
                  ]


  })
}

nameChangeHandler = (event) =>{ // event is a JavaScript pre-defined event. This stores all the data related to the event.

  this.setState({

                  persons : [
                    {name: event.target.value  , age: 9999999},
                    {name: "Rohit" , age:22}
                  ]


  })
}

toggleDataHandler = ()=>{

  const doesShow = this.state.toggleData;
  this.setState({

      toggleData : !doesShow
  })

}



  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>Hello Rahul</h1>

        </header>
          <button onClick={this.switchEventHandler.bind(this,"CHUTTAD") , this.toggleDataHandler}>Switch Names</button>
        <code>Magic Name</code><input onChange={this.nameChangeHandler} />
      {  this.state.toggleData ?
     <div >

         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

         <Person randomDate={this.state.randomDate} customClickEvent = {this.switchEventHandler.bind(this, "Vishal")} />

      </div>
      : "Sorry"
    }


      </div>


    );
  }
}

export default App;
