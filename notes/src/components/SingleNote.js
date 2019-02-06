import React, { Component } from 'react';
import axios from 'axios';

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: this.props.notes
         }
    }
    componentDidMount = () => {
        this.fetchNote(this.props.match.params.id)
    }
    fetchNote = id => {
      axios.get(`https://fast-brushlands-0000.herokuapp.com/api/notes/${id}`)
      .then(res => {
          this.setState({ notes: res.data[0] })
      })
    }
    render() { 
        return ( 
            <div>
                <h3>{this.state.notes.title}</h3>
                <h5>{this.state.notes.content}</h5>
            </div>
         );
    }
}
 
export default SingleNote;