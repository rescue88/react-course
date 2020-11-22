import ProfileInfo from './ProfileInfo/ProfileInfo';
import st from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Common/Preloader';

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className={ st.profileContainer }>
                <ProfileInfo profile={ props.profile } status={ props.status } updateStatus={ props.updateStatus }/>
                <MyPostsContainer />
            </div>
        );
    }
}

export default Profile;