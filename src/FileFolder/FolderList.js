import React from 'react'
import Folder from './Folder'

export default function FolderList(props) {
//console.log(folder)
    const folders = props.folders.map(folder => {
        return (
            <Folder 
            key={folder.id}
            name={folder.name}
            id={folder.id}
            />
        )
    });
    console.log(folders)

    return (
        <ul>
            {folders}
        </ul>
    )
}

