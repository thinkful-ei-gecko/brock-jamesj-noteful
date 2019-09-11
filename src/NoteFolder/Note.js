import React from 'react'

export default function Note(props) {

    const formatDate = new Date(props.modified)
    console.log(formatDate)

    return (
       <li id={props.id}>
           <p>{props.name}</p>
           <p>Date modified: {formatDate.toLocaleDateString()}</p>
           <p>{props.name}</p>
           <button>Delete Note</button>
       </li>
    )
}