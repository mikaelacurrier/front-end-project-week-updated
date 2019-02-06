import React from 'react';
import { NavLink } from 'react-router-dom';

const Notes = props => {
    return ( 
        <div>
            {props.notes.map((note, idx) => (
                <section key={idx}>
                <NavLink to={`/notes/${note.id}`}>
                        <h5>{note.title}</h5>
                        <p>{note.content}</p>
                </NavLink>
                    </section>
            ))}
        </div>
     );
}
 
export default Notes;