import React from 'react'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    notes = () => {
        return this.apiResponse 
        // I do not remember what would come after this but something to do with each note content.
    }

    return(
        <ul>
        notes()
        </ul >
    )

}
