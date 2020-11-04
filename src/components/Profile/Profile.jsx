import MyPosts from './MyPosts/MyPosts';
import st from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={st.content_img}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
            </div>
            <div className={st.content_profile}>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;