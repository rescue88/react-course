import React from 'react';
import { follow, unfollow , getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

//function template to get main data from state
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

//create all context API containers to execute all functionality and place props into clear target Component
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsers,
    }),
    withAuthRedirect,
)(UsersContainer);