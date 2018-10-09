// Persons.js was and to split the code of iteration of Person

import React from 'react';
import Person from './Person/Person';

const persons = (request) =>{

  

    return (
    request.persons.map( ( person, index ) => {
      return <Person
        click={() => request.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => request.changed( event, person.id )} />
    } )
  )
  };
  //Default Code

  export default persons;
