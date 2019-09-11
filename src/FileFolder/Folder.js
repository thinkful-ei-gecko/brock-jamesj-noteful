import React from 'react'

export default function Folder(props) {
    // console.log('these are the folder props', props)
    return (
       <li id={props.id}
       className={props.id === props.selected.id ? 'Selected Folder' : 'Folder'}
       >
           {props.name}
       </li>
    )
}