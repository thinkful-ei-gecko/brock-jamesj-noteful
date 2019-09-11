import React from 'react'

export default function Note(props) {

    return (
       <li id={props.id}>
           {props.name}
       </li>
    )
}