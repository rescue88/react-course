import Profile from '../Profile';
import st from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={st.profileImg}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
            </div>
            <div className={st.profileInfo}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;