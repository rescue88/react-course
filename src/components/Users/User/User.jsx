import { NavLink } from 'react-router-dom';
import userPhoto from './../../../assets/images/Annie.png';
import st from './../Users.module.css';

const User = ({ user, followingProgress, follow, unfollow }) => {
    return (
        <div className={ st.userItem }>
            <div className={ st.userItemFollow }>
                <div className={st.userItemFollowAva }>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={ user.photos.small != null ? user.photos.small : userPhoto } alt="user avatar" />
                    </NavLink>
                </div>
                <div className={ st.userItemFollowButton }>
                    { user.followed
                        ? <button disabled={ followingProgress.some( id => id === user.id) } onClick = { () => unfollow(user.id) }>Unfollow</button>
                        : <button disabled={ followingProgress.some( id => id === user.id ) } onClick={ () => follow(user.id) }>Follow</button>
                    }
                </div>
            </div>
            <div className={ st.userItemInfo }>
                <div className={ st.userItemInfoDetect }>
                    <span>{ user.name }</span>
                    <span>{ user.status }</span>
                </div>
                <div className={ st.userItemInfoLocation }>
                    <span>{ 'item.location.country' },</span>
                    <span>{ 'item.location.city' }</span>
                </div>
            </div>
        </div>
    );
}
export default User;