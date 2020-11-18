import React from 'react';
import { setUsers, onFollow, onUnfollow, setCurrentPage, setUsersTotalCount, togglePreloader, toggleFollowingProgress } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { usersAPI } from '../api/api';
const { connect } = require("react-redux");

//class component with some logic for users
class UsersContainer extends React.Component {
    //After first component's rendering add users
    componentDidMount() {
        this.props.togglePreloader(true);
        //load first page with a fixed amount of users
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.togglePreloader(false);
            this.props.setUsers(data.items);
        });
    };
    //function for making a request after selecting other page
    onPageChanged = (pageNumber) => {
        this.props.togglePreloader(true);
        this.props.setCurrentPage(pageNumber);
        //load new users after page changes
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.togglePreloader(false);
            this.props.setUsers(data.items);
        });
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
                        onFollowClick = { this.props.onFollow }
                        onUnFollowClick = { this.props.onUnfollow }
                        followingProgress = { this.props.followingProgress }
                        toggleFollowing = {this.props.toggleFollowingProgress} />
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
    setUsers,
    setCurrentPage,
    onFollow,
    onUnfollow,
    setUsersTotalCount,
    togglePreloader,
    toggleFollowingProgress,
})(UsersContainer);