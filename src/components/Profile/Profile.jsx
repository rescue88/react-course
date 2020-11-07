import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import st from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
                posts={props.posts.posts} 
                addPost={props.addPost} 
                updateNewPostValue={props.updateNewPostValue}
                newPostValue={props.newPostValue} />
        </div>
    );
}

export default Profile;