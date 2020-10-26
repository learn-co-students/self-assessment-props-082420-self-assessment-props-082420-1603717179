import React from 'react'
import Note from './Note.js'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    render(){
        for( let i of this.apiResponse() )
        // for(let i = 0; i < this.apiResponse().length; i++)
        {
                return(
                    // <ul>
                        <Note content={i} />
                    // </ul >
                )  
        }
    }
}

export default NotesContainer;