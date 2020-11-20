import React from 'react';
import { getProfileData } from '../../redux/profileReducer';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

//class component container to make all side effects
class ProfileContainer extends React.Component {
    //do smth after HTML had been rendered
    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        //if id = 0 return a default value
        if(!userId) {
            userId = 2;
        }
        //get profile info by an id
        this.props.getProfileData(userId);
    }
    render = () => {
        //if you are not authorized, go to login
        if(!this.props.isAuth) {
            return <Redirect to="/login" />
        }
        //draw Component for authorized users
        return (
            <Profile {...this.props} profile={ this.props.profile } />
        );
    };
};

//get profile state info and take it for connect function
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    };
};
//return another component with url data
let WithRouterDataContainerComponent = withRouter(ProfileContainer);
//create another context API container to take state/dispatch
export default connect(mapStateToProps, {
    getProfileData,
})(WithRouterDataContainerComponent);