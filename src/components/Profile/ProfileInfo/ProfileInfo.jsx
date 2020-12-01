import st from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={ st.profileBackground }>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="profile custom background" />
            </div>
            <div className={ st.profileInfo }>
                <div className={ st.profileAva }>
                    <img src={ props.profile.photos.large } alt="profile avatar" />
                </div>
                <ProfileStatusWithHooks status={ props.status } updateStatus={ props.updateStatus } />
            </div>
        </div>
    );
}

export default ProfileInfo;