import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

   myNotes = () => {
        return this.apiResponse.map(function(note){return <Note content={note} />})
    }

    render(){
        
        return (
            
            <ul>{this.mynotes}</ul>
            )
        }
    }
    

export default NotesContainer;