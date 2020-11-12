import { addPostCreator, updateNewPostValueCreator } from '../../../redux/profileReducer';
import storeContext from '../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
    return (
        //use context
        <storeContext.Consumer>
            { (store) => {
                let state = store.getState().profilePage;
                //add post after button clicked
                const addPost = () => {
                    store.dispatch(addPostCreator());
                }
                //change global variable to rerender page after input changes
                const onPostChange = (text) => {
                    let action = updateNewPostValueCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostValue={ onPostChange }
                                addPost={ addPost } 
                                posts={ state.posts } 
                                newPostValue={ state.newPostValue } />
            }}
        </storeContext.Consumer>
    );
}

export default MyPostsContainer;