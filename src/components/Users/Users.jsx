import React from 'react';
import * as axios from 'axios';
import st from './Users.module.css';
import userPhoto from './../../assets/images/Annie.png';

class Users extends React.Component {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={ st.usersContainer }>
                <div className={ st.usersContainerSelector }>
                    {
                        pages.map( item => {
                            return <span className={ this.props.currentPage === item && st.selectPage } onClick={ (e) => { this.onPageChanged(item) } } >{ item }</span>
                        })
                    }
                </div>
                <div className={st.usersContainerHeader}>
                    Users list
                </div>
                <div className={st.usersContainerItems}>
                { this.props.users.map( item => {
                    return <div key={ item.id } className={ st.userItem }>
                            <div className={ st.userItemFollow }>
                                <div className={st.userItemFollowAva }>
                                    <img src={ item.photos.small != null ? item.photos.small : userPhoto } />
                                </div>
                                <div className={ st.userItemFollowButton }>
                                { item.followed ? <button onClick = { () => { this.props.onUnFollowClick(item.id) }}>Follow</button> : <button onClick={ () => this.props.onFollowClick(item.id) } >Unfollow</button> }
                                </div>
                            </div>
                            <div className={ st.userItemInfo }>
                                <div className={ st.userItemInfoDetect }>
                                    <span>{ item.name }</span>
                                    <span>{ item.status }</span>
                                </div>
                                <div className={ st.userItemInfoLocation }>
                                    <span>{ 'item.location.country' },</span>
                                    <span>{ 'item.location.city' }</span>
                                </div>
                            </div>
                        </div>
                })}
                </div>
                <div className={st.usersContainerShowMore}>
                    <button>Show more</button>
                </div>
            </div>
    };
}

export default Users;