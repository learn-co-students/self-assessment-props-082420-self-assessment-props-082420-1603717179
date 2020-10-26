import React from 'react'
import Note from './Note.js'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    renderNotes = () => {
        return this.apiResponse().map(note => <Note content={note} />)
    }
    
    render() {
        
        return(
            <ul>
                {this.renderNotes()}
            </ul>
        )
    }

}

export default NotesContainer
