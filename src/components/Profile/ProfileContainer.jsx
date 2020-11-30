import React from 'react';
import { getProfileData, getProfileStatus, updateProfileStatus } from '../../redux/profileReducer';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

//class component container to make all side effects
class ProfileContainer extends React.Component {
    //do smth after HTML had been rendered
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        //if id = 0 return a default value
        if(!userId && this.props.currentUserId) {
            userId = this.props.currentUserId;
        } else {
            this.props.history.push("/login") ;
        }
        //get profile info by an id
        this.props.getProfileData(userId);
        this.props.getProfileStatus(userId);
    }
    render = () => {
        //draw Component for authorized users
        return (
            <Profile profile={ this.props.profile } status={ this.props.status } updateStatus={ this.props.updateProfileStatus }/>
        );
    };
};

//function template to get main data from state
const mapStateToProps = (state) => {
    return {
        currentUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

//create all context API containers to execute all functionality and place props into clear target Component
export default compose(
    connect(mapStateToProps, {
        getProfileData,
        getProfileStatus,
        updateProfileStatus,
    }),
    withRouter,
)(ProfileContainer);