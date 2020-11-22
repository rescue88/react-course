import Preloader from '../../Common/Preloader';
import st from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    } else {
        return (
            <div>
                <div className={ st.profileBackground }>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="profile custom background" />
                </div>
                <div className={ st.profileInfo }>
                    <div className={ st.profileAva }>
                        <img src={ props.profile.photos.large } alt="profile avatar" />
                    </div>
                    <ProfileStatus status={ props.status } updateStatus={ props.updateStatus } />
                </div>
            </div>
        );
    }
}

export default ProfileInfo;