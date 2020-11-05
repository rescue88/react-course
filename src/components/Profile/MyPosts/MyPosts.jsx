import st from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    //get my posts
    let postElements = props.posts.map( item => <Post message={item.message} likesCount={item.likesCount} /> );

    return (
    <div className={st.content_posts}>
        <h3>My posts</h3>
        <div>
            <div> 
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
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