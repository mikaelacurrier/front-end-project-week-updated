import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return ( 
        <div>
            <NavLink to='/notes'>
                <h2>Mikaela's Notes</h2>
                <button>View Notes</button>
            </NavLink>
            <NavLink to='/createnote'> 
                <button>Create New Note</button>
            </NavLink>
            {/* <NavLink> */}
                <button>Search Notes</button>
            {/* </NavLink> */}
        </div>
     );
}
 
export default SideBar;