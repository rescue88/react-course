import React from 'react';
import * as axios from 'axios';
import st from './Users.module.css';
import userPhoto from './../../assets/images/Annie.png';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    //add users method
    render = () => {
        return <div className={st.usersContainer}>
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