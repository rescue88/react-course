import st from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from './../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControl';

//create a validate of maximum symbols
const maxLength30 = maxLengthCreator(30);

//create a form Component
let MyPostsForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div> 
                <Field name="postMessage" component={ Textarea } placeholder="Ender a post's message"
                        validate={ [required, maxLength30] } />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}

//reduxForm container to build a state part
MyPostsForm = reduxForm({
    form: 'postTextarea',
})(MyPostsForm);

const MyPosts = React.memo((props) => {
    //get owner's posts
    let postElements = props.posts.map( item => <Post key={ item.id } id={ item.id } message={ item.message } likesCount={ item.likesCount } /> );

    //do smth after submit button clicked
    const onSubmit = (formData) => {
        props.addPost(formData.postMessage);
    }

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
});

export default MyPosts;