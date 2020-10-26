import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    renderNotes = () => {
        return this.apiResponse().map(note => <Note content={note} />)
    }
    //lifecycle
    render(){

        return(
            //when rendering Note give it a props called content
            <ul>
                {this.renderNotes()}
            </ul >
        )
    }

}


export default NotesContainer