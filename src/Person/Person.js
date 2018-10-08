import React from 'react';
import './Persons.css';
// import Radium from 'radium';

let value = 100;

const person = (props)=>{

// const style ={
//   '@media (min-width=500px)':{
//     width: '400px'
//   }
// }

  return (

    <div className="Person" >

    <h3 onClick={props.customClickEvent}>

        This is {value} Person Name {props.name} & Age {props.age}

    </h3>

    </div>
)

}



export default person;
