import ProfileInfo from './ProfileInfo/ProfileInfo';
import st from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;