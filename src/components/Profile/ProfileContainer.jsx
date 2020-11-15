import React from 'react';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from 'react-redux';

//class component container to make all side effects
class ProfileContainer extends React.Component {
    //do smth after HTML had been rendered
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render = () => {
        return (
            <Profile {...this.props} profile={ this.props.profile } />
        );
    };
};

//get profile state info and take it for connect function
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};
//create another context API container to take state/dispatch
export default connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainer);