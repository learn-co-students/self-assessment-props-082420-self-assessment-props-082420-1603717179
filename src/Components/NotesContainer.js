import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {
	
	
	
	apiResponse = () => {
		let notes =  ["First Note", "Second Note", "Third Note", "Fourth Note"]
		
		return notes.map(note => <Note {...note} />)
	}
	
	render() {


		return(
			<ul>
				{this.apiResponse()}
			</ul >
		)	

	}

}


export default NotesContainer;