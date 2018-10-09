import React, { Component } from 'react';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Rahul', age: 228 },
      { id: 'vasdf1', name: 'Kartik', age: 233},
      { id: 'asdf11', name: 'Vishal', age: 260 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    let persons_display = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons_display= (
        <div>

          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            />

        </div>
      );

    }



    return (
        <div className={classes.App}>

          <Cockpit showPersons={this.state.showPersons}
            togglePersonsHandler={this.togglePersonsHandler} persons={this.state.persons} />
          {persons_display}

        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
