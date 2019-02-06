import React from 'react';

const CreateNote = props => {
    const create = () => {
        props.addNote();
        props.history.push('/notes');
        
    }
    return ( 
        <div>
            <h4>Add Your Ideas Here:</h4>
            <form onSubmit={create}>
                <input type='text'
                placeholder='title'
                onChange={props.changeHandler}
                name='title'
                />
                <input type='text'
                placeholder='content'
                onChange={props.changeHandler}
                name='content'
                />
                <button onSubmit={create}>Add Note!</button>
            </form>
        </div>
     );
}
 
export default CreateNote;