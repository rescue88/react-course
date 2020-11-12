import { addPostCreator, updateNewPostValueCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    //add post after button clicked
    const addPost = () => {
        props.dispatch(addPostCreator());
    }
    //change global variable to rerender page after input changes
    const onPostChange = (text) => {
        let action = updateNewPostValueCreator(text);
        props.dispatch(action);
    }

    return (
        <MyPosts updateNewPostValue={ onPostChange } addPost={ addPost } posts={ props.profileData.posts } newPostValue={ props.profileData.newPostValue } />
    );
}

export default MyPostsContainer;