import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

//function template to get profile info from state in connect
let mapStateToProps = (state) => {
    return  {
        posts: state.profilePage.posts,
        newPostValue: state.profilePage.newPostValue,
    }
}
//execute connect function to draw MyPosts after calling MyPostContainer
export default connect(mapStateToProps, {
    addPost,
})(MyPosts);