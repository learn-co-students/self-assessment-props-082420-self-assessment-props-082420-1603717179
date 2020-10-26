// import React, { Component } from "react";
import React from 'react'


function Note(props)  {
    return (
        <li>
            {/* different words */}
            {props.content}
        </li>
    )  
}

export default Note;