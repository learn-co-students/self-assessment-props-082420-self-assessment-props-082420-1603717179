import React from 'react'
import { render } from 'react-dom';


function Note() {
    // render(){

        return (
            <li>
                different words
                {this.props.content}
            </li>
        )
    // }

    
}

export default Note;