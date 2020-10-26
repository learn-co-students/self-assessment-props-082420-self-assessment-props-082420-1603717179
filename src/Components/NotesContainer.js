import React, {Component} from 'react'
import Note from './Note'

class NotesContainer extends Component {

  apiResponse = () => {
      return ["First Note", "Second Note", "Third Note", "Fourth Note"]
  }

  Notes = () =>{
    return this.apiResponse().map(
      function(note){
        return <Note content={note}/>
      }
    )
  }

render(){
  return(
      <ul>
        {this.Notes()}
      </ul >
  )
}

}
export default NotesContainer
