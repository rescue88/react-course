import { setUsersCreator, followCreator, unFollowCreator } from '../../redux/usersReducer';
import Users from './Users';
const { connect } = require("react-redux");

//function template to get users info from state in connect
const mapStateToTop = (state) => {
    return {
        users: state.usersPage.users,
    };
};
//function template to get callbacks and use dispatch in connect
const mapDispatchToTop = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        },
        onFollowClick: (userId) => {
            dispatch(followCreator(userId));
        },
        onUnFollowClick: (userId) => {
            dispatch(unFollowCreator(userId));
        },
    };
};

const UsersContainer = connect(mapStateToTop, mapDispatchToTop)(Users);

export default UsersContainer;