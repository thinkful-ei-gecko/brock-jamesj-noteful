import React from 'react'

export default function Note(props) {

    const formatDate = new Date(props.modified)
    //console.log(formatDate)

    return (
       <li id={props.id}>
           <h2>{props.name}</h2>
           <p>Date modified on {formatDate.toLocaleDateString()}</p>
           <p>{props.content}</p>
           <button>Delete Note</button>
       </li>
    )
}