import React from 'react'

export default function Folder(props) {

    return (
       <li id={props.id}>
           {props.name}
       </li>
    )
}