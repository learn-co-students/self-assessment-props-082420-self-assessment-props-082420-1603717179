import React from 'react'
import Note from './Note.js'


class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    
    renderApi = () =>{
        
        return this.apiResponse().map(ap => <Note content={ap}/>)
        

    }
  render(){
    return(
    <ul>{this.renderApi()}</ul >
    )
  }


}

export default NotesContainer

