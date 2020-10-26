import React from 'react'
import NotesContainer from './NotesContainer'


function Note(props) {

    return <li>{props.content}</li>
 //return {props.content.map(item => {return <li>item</li>})}

}

export default Note