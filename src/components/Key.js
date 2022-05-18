import React, { useContext } from 'react'
import { AppContext } from "../App"

function Key({ keyVal, bigKey,disabled }) {
    const { onDelete, onSelectLetter, onEnter } = useContext(AppContext);

    const selectletter = () => {
        if (keyVal === 'ENTER') {
            onEnter()
        } else if (keyVal === 'DELETE') {
            onDelete()
        } else {
            onSelectLetter(keyVal)
        }
    }
    return (
        <div className='key' id={bigKey ? 'big': disabled && 'disabled'} onClick={selectletter}>{keyVal}
        </div>
    );

}
export default Key;