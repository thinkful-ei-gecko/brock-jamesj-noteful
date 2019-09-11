import React from 'react'

export default function Note(props) {
  const formatDate = new Date(props.modified)
  console.log('Note props are:', props)
  if (props.id) {
    return (
      <li id={props.id}>
        <h2>{props.name}</h2>
        <p>Date modified on {formatDate.toLocaleDateString()}</p>
        <p>{props.content}</p>
        <button>Delete Note</button>
      </li>
    )
  } else {
    return <li className="error">No notes found. Please check ID provided</li>
  }
}
