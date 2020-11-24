import st from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

let MyPostsForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div> 
                <Field name="postMessage" component="textarea" placeholder="Ender a post's message" />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}

MyPostsForm = reduxForm({
    form: 'postTextarea',
})(MyPostsForm);

const MyPosts = (props) => {
    //get my posts
    let postElements = props.posts.map( item => <Post id={ item.id } message={ item.message } likesCount={ item.likesCount } /> );

    let onSubmit = (formData) => {
        props.addPost(formData.postMessage);
    }

    //make a react link for textarea
    // let newPostElement = React.createRef(); 
    //add post after button clicked
    // const onAddPost = () => {
    //     props.addPost();
    // }
    //change global variable to rerender page after input changes
    // const onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostValue(text);
    // }

    return (
        <div className={ st.content_posts }>
            <h3>My posts</h3>
            <MyPostsForm onSubmit= { onSubmit } />
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