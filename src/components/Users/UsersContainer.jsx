import React from 'react';
import { setUsersCreator, followCreator, unFollowCreator, setCurrentPageCreator, setUsersTotalCountCreator } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
const { connect } = require("react-redux");

//class component with some logic for users
class UsersContainer extends React.Component {
    //After first component's rendering add users
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };
    //function for making a request after selecting other page
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };
    //add users method
    render = () => {
        return <Users totalUsersCount={ this.props.totalUsersCount }
                        pageSize = { this.props.pageSize }
                        currentPage = { this.props.currentPage }
                        onPageChanged = { this.onPageChanged }
                        users={ this.props.users }
                        onFollowClick = { this.props.onFollowClick }
                        onUnFollowClick = { this.props.onUnFollowClick }
                         />
    };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);