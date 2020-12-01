import React, { useState } from 'react';
import st from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    // hook for local editMode changes
    let [editMode, setEditMode] = useState(false);
    // hook for local status changes
    let [status, setStatus] = useState(props.status);

    //show input after doubleclicking status
    const activateEditMode = () => {
        setEditMode(true);
    }
    //comeback status after leaving input
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    //rewrite status after changes in input
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={ st.profileStatus }>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{ props.status || "---" }</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={ onStatusChange } type="text" onBlur={ deactivateEditMode } value={ status } maxLength="300" autoFocus/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;