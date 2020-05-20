import React from 'react'
import spinner from './spinner_ex.gif'


function Spinner() {
    return(
        <div>
            <img
            src = {spinner}
            alt="Loading......"
            />
            
        </div>
    )
}

export default Spinner;