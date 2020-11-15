import { setUsersCreator, followCreator, unFollowCreator, setCurrentPageCreator, setUsersTotalCountCreator } from '../../redux/usersReducer';
import Users from './Users';
const { connect } = require("react-redux");

//function template to get users info from state in connect
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};
//function template to get callbacks and use dispatch in connect
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreator(currentPage));
        },
        onFollowClick: (userId) => {
            dispatch(followCreator(userId));
        },
        onUnFollowClick: (userId) => {
            dispatch(unFollowCreator(userId));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountCreator(totalCount));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;