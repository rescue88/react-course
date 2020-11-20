import React from 'react';
import { follow, unfollow , getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
const { connect } = require("react-redux");

//class component with some logic for users
class UsersContainer extends React.Component {
    //After first component's rendering add users
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    //function for making a request after selecting other page
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };
    //add users method
    render = () => {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={ this.props.totalUsersCount }
                        pageSize = { this.props.pageSize }
                        currentPage = { this.props.currentPage }
                        onPageChanged = { this.onPageChanged }
                        users={ this.props.users }
                        follow={ this.props.follow }
                        unfollow={ this.props.unfollow }
                        followingProgress={ this.props.followingProgress } />
            </>
        )
    };
}

//function template to get users info from state in connect
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    };
};
//after a calling UsersContainer we call a function connect with a parametres for state managing of a users page
export default connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
})(UsersContainer);