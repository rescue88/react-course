import { connect } from 'react-redux';
import { addPostCreator, updateNewPostValueCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

//function template to get profile info from state in connect
let mapStateToProps = (state) => {
    return  {
        posts: state.profilePage.posts,
        newPostValue: state.profilePage.newPostValue,
    }
}
//function template to get callbacks and use dispatch in connect
let mapDispatchToProps = (dispatch) => {
    return  {
        addPost: () => { dispatch(addPostCreator()) },
        updateNewPostValue: (text) => { dispatch(updateNewPostValueCreator(text)) },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;