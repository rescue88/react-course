const Profile = () => {
    return (
    <div className="content">
        <div className="content_img">
            <img className="full-width" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
        </div>
        <div className="content_profile">
            ava + description
        </div>
        <div className="content_posts">
            my posts
            <div className="content_posts_new">
                new post
            </div>
            <div className="content_posts_container">
            <div className="content_posts_container_item">
                item-1
            </div>
            <div className="content_posts_container_item">
                item-2
            </div>
            </div>
        </div>
    </div>
    );
}

export default Profile;