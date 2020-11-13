import st from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    //get my posts
    let postElements = props.posts.map( item => <Post id={ item.id } message={ item.message } likesCount={ item.likesCount } key={ item.id } /> );

    //make a react link for textarea
    let newPostElement = React.createRef();
    //add post after button clicked
    const onAddPost = () => {
        props.addPost();
    }
    //change global variable to rerender page after input changes
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostValue(text);
    }

    return (
    <div className={ st.content_posts }>
        <h3>My posts</h3>
        <div>
            <div> 
                <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostValue } />
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
        </div>
        <div className={ st.add }>
            new post    
        </div>
        <div className={ st.container }>
           { postElements }
        </div>
    </div>
    );
}

export default MyPosts;