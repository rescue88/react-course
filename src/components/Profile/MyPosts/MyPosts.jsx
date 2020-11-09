import st from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostValueActionCreater } from './../../../redux/state';

const MyPosts = (props) => {
    //get my posts
    let postElements = props.state.posts.map( item => <Post message={item.message} likesCount={item.likesCount} /> );

    //make a react link for textarea
    let newPostElement = React.createRef();
    //add post after button clicked
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    //change global variable to rerender page after input changes
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostValueActionCreater(text));
    }

    return (
    <div className={st.content_posts}>
        <h3>My posts</h3>
        <div>
            <div> 
                <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.state.newPostValue } />
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        <div className={st.add}>
            new post    
        </div>
        <div className={st.container}>
           { postElements }
        </div>
    </div>
    );
}

export default MyPosts;