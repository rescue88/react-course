import Preloader from '../../Common/Preloader';
import st from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    } else {
        return (
            <div>
                <div className={st.profileImg}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="profile custom background" />
                </div>
                <div className={st.profileInfo}>
                    <img src={ props.profile.photos.large } alt="profile avatar" />
                    ava + description
                </div>
            </div>
        );
    }
}

export default ProfileInfo;