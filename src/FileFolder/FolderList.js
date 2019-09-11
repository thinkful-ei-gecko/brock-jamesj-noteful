import React from 'react'
import Folder from './Folder'

export default function FolderList(props) {
console.log(props)
    const folders = props.folders.map(folder => {
        return (
            <Folder 
            key={folder.id}
            name={folder.name}
            id={folder.id}
            selected={props.selected ? props.selected : '' }
            />
        )
    });

    return (
        <>
            <ul>
                {folders}
            </ul>
            <button>Add Folder</button>
        </>
    )
}

