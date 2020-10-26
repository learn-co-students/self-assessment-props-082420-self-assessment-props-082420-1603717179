import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    getNotes() {
        let notes = this.apiResponse()
        console.log(notes)
        notes = notes.map(note => <Note content={note} />)
        return notes
    }

    render() {
        return (
            <ul>{this.getNotes()}</ul>
        )
    }
        
}

export default NotesContainer;