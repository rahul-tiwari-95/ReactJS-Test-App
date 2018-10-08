import React from 'react';
import './Persons.css'

let value = 100;

const person = (props)=>{

  return (

    <div className="Person">

    <h3 onClick={props.customClickEvent}>This is Person Name {props.name} & Age  {props.age} AND {props.children}   {props.randomDate}
    <input onChange={props.sendOnChangeToPersons}></input>
    </h3>

    </div>
)

}



export default person;
