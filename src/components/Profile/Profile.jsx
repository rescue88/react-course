import ProfileInfo from './ProfileInfo/ProfileInfo';
import st from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className={ st.profileContainer }>
            <ProfileInfo profile={ props.profile } />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;