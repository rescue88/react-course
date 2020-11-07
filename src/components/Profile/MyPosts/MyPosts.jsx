import st from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    //get my posts
    let postElements = props.posts.map( item => <Post message={item.message} likesCount={item.likesCount} /> );

    //add new post writing new info into a global state variable
    let newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostValue(text);
    }

    return (
    <div className={st.content_posts}>
        <h3>My posts</h3>
        <div>
            <div> 
                <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostValue } />
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