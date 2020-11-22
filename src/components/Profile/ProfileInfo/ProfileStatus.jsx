import React from 'react';
import st from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    render() {
        return (
            <div className={ st.profileStatus }>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{ this.props.status || "---" }</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={ this.onStatusChange } type="text" onBlur={ this.deactivateEditMode } value={ this.state.status } maxLength="300" autoFocus/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;