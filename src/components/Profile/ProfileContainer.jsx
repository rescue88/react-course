import React from 'react';
import { getProfileData } from '../../redux/profileReducer';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';

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
        //draw Component for authorized users
        return (
            <Profile {...this.props} profile={ this.props.profile } />
        );
    };
};

//function template to get main data from state
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};

//place Component into containers to check if user has an access
const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//return another component with url data
let WithRouterDataContainerComponent = withRouter(AuthRedirectComponent);
//create another context API container to take state/dispatch
export default connect(mapStateToProps, {
    getProfileData,
})(WithRouterDataContainerComponent);