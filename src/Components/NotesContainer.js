import React from 'react'
import Note from './Components/Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    return(
        // invoke Note with apiResponse, map over?
        // iterate through each element in api response?
        apiResponse.forEach(api =>
            <ul>{Note(api)}</ul >
            )
    )

}
