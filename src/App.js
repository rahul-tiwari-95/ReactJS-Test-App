import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
// import Radium  , {StyleRoot} from 'radium';

class App extends Component {



  state = {  //Remember , inside a Object ; we always decalre anything using Key:Value Pairs
            // But inside a class , we use = so hat we allocate functionality or primitive types to certain variables.

    persons : [
      {name: "Rahul"  , age: 99},
      {name: "Rohit" , age:22},
      {name: "Vishal" , age:30}
    ],
    toggleData : true
  }  // We made a Object inside State and then an array of Objects inside persons array


switchEventHandler = (nameChange)=>{

  // console.log("The Button is working");

  this.setState({

                  persons : [
                    {name: nameChange  , age: 9999999},
                    {name: "Rohit" , age:22},
                    {name: "Vishal" , age:30}
                  ]


  })
}

nameChangeHandler = (event) =>{ // event is a JavaScript pre-defined event. This stores all the data related to the event.

  this.setState({

                  persons : [
                    {name: event.target.value  , age: 9999999},
                    {name: "Rohit" , age:22},
                    {name: "Vishal" , age:30}
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

    // let style = {
    //     font: 'white',
    //     border: '2px solid red',
    //     color: 'white',
    //     padding: '8px',
    //     backgroundColor: 'green',
    //     ':hover' : {
    //       backgroundColor: 'blue'
    //     }
    //
    // }


    let tempPerson = null

    if(this.state.toggleData){

        tempPerson =[

      <div>

          {
            this.state.persons.map( singlePerson => {

              // body...
              return (<Person name={singlePerson.name} age = {singlePerson.age}/>)
            })
          }

      </div>


     ]
     // style.backgroundColor = 'red'

    }


    return (




      <div className="App">
        <header className="App-header">

          <h1>Hello Rahul</h1>

        </header>
          <button  onClick={this.switchEventHandler.bind(this,"CHUTTAD") , this.toggleDataHandler}>Toogle Names</button>
        <hr/>
        <code>Magic Name</code><input onChange={this.nameChangeHandler} />

      {tempPerson}



      </div>



    );
  }
}

export default App;
