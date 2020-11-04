import st from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
    <div className={st.content_posts}>
        my posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={st.add}>
            new post
        </div>
        <div className={st.container}>
           <Post message='Hello, im there' />
           <Post message='What are you doing?' />
           <Post />
           <Post />
           <Post />
           <Post />
        </div>
    </div>
    );
}

export default MyPosts;