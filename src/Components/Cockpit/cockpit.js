import React from 'react';
import classes from './cockpit.css'

const cockpit = (request)=>{

      let btnClass = '';

      if(request.showPersons){

              btnClass = classes.Red;

      }

        const assignedClasses = [];
        if ( request.persons.length <= 2 ) {
          assignedClasses.push( classes.red ); // classes = ['red']
        }
        if ( request.persons.length <= 1 ) {
          assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
        }


  return(

    <div className={classes.cockpit}>
    <h1>Hi, I'm Allu Fashion</h1>
    <p className={assignedClasses.join( ' ' )}>simply, real!</p>
    <button
      className={btnClass}
      onClick={request.togglePersonsHandler}>Toggle Persons</button>
    </div>
  )
}


export default cockpit;
