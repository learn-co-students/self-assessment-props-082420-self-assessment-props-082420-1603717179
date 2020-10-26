import React from 'react'
import Note from './Note'

export default class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }


    renderNotes = () => this.apiResponse().map(note => <Note content={note}/>)
    


   
    render() {
        return(
            <ul>
                {/* //this.apiResponse().map(note => N) */}
                {/* <Note content={apiResponse()}/> */}
                {this.renderNotes()}
            </ul >
        )
    }
}

