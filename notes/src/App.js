import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import SideBar from './components/SideBar';
import Notes from './components/Notes'
import CreateNote from './components/CreateNote';
import SingleNote from './components/SingleNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],      
    }
  }
    componentDidMount = () => {
     axios.get(`https://fast-brushlands-0000.herokuapp.com/api/notes`)
     .then(response => {
       this.setState({ notes: response.data })
     })  
    }
     addNote = () => {
       axios.post('https://fast-brushlands-0000.herokuapp.com/api/notes', {
         title: this.state.title,
         content: this.state.content
       })
     }
    changeHandler = e => {
      this.setState({[e.target.name]: e.target.value })
    }
  render() {
    return (
      <div className="App">
        <Route path='/' component={SideBar} />

        <Route exact path='/notes' render={props => (
          <Notes {...props} notes={this.state.notes}/>
      )}/>
        <Route exact path='/createnote' render={props => (
          <CreateNote {...props} notes={this.state.notes} 
          changeHandler={this.changeHandler}
          addNote={this.addNote}/>
        )} />
        <Route exact path='/notes/:id' render={props => (
          <SingleNote {...props} notes={this.state.notes}/>
        )} />
      </div>
    );
  }
}

export default App;
