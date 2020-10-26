import React from 'react'
import Note from './Note.js'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render() {
    return(
        <ul>
            {apiResponse.map(Note(x))} 
            
        </ul >
    )
    }
}
export {NotesContainer}