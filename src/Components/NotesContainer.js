import React from 'react'
import Note from './Note.js'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render() {
    return(
        <ul>
            {this.apiResponse(Note)} 
            
        </ul >
    )
    }
}
export default NotesContainer