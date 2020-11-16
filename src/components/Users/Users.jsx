import st from './Users.module.css';
import userPhoto from './../../assets/images/Annie.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

//clear functional component
const Users = (props) => {
    //get amount of pages
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={ st.usersContainer }>
            <div className={ st.usersContainerSelector }>
                {
                    //draw pages
                    pages.map( item => {
                        return <span className={ props.currentPage === item && st.selectPage } onClick={ (e) => { props.onPageChanged(item) } } >{ item }</span>
                    })
                }
            </div>
            <div className={st.usersContainerHeader}>
                Users list
            </div>
            <div className={st.usersContainerItems}>

                {//draw users
                    props.users.map( item => {
                    return <div key={ item.id } className={ st.userItem }>
                            <div className={ st.userItemFollow }>
                                <div className={st.userItemFollowAva }>
                                    <NavLink to={`/profile/${item.id}`}>
                                        <img src={ item.photos.small != null ? item.photos.small : userPhoto } />
                                    </NavLink>
                                </div>
                                <div className={ st.userItemFollowButton }>
                                    { item.followed
                                                    ? <button onClick = { () => { 
                                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                                                            withCredentials: true,
                                                            headers: {
                                                                'API-KEY': '8d1d777f-de1e-443d-9cb7-07c20fa27792',
                                                            },
                                                        }).then(response => {
                                                            if(response.data.resultCode === 0) {
                                                                props.onUnFollowClick(item.id);
                                                            }
                                                        });
                                                    }}>Unfollow</button>
                                                    : <button onClick={ () => {
                                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {}, {
                                                            withCredentials: true,
                                                            headers: {
                                                                'API-KEY': '8d1d777f-de1e-443d-9cb7-07c20fa27792',
                                                            },
                                                        }).then(response => {
                                                            if(response.data.resultCode === 0) {
                                                                props.onFollowClick(item.id);
                                                            }
                                                        });
                                                        
                                                    }} >Follow</button> }
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
            <div className={ st.usersContainerShowMore }>
                <button>Show more</button>
            </div>
        </div>
}

export default Users;