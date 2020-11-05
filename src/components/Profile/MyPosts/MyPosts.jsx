import st from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "Welcome to the course, bro", likesCount: 3},
        {id: 3, message: "Heyoo, im finally here", likesCount: 0},
    ];

    let postElements = posts.map( item => <Post message={item.message} likesCount={item.likesCount} /> );

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