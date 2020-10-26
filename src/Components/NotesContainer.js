import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    createNotes = () => {
        return this.apiResponse().map(note => <Note content={note} />)
    }

    render(){
        return(
        <ul>
            {this.createNotes()}
        </ul>
        )
    }
}

export default NotesContainer
