//describe actions
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA';

//action creator template for addMessage function
export const addMessageCreator = () => {
    return {
      type: ADD_MESSAGE,
    }
  }
//action creator template for onMessageChange function
export const updateNewMessageValueCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXTAREA,
        newText: text,
    }
}
//return changed state after a right action
const dialoguesReducer = (state, action) => {
    switch(action.type) {
        //send new message by a click
        case ADD_MESSAGE:
          let newMessage = {
            id: 6,
            message: state.newMessageValue,
          };
          state.messages.push(newMessage);
          state.newMessageValue = '';
          break;
        //look for change in new message textarea
        case UPDATE_MESSAGE_TEXTAREA:
          state.newMessageValue = action.newText;
          break;
        //return unchanged state if there is not a dialogues action
        default:
            return state;
      }
    return state;
}

export default dialoguesReducer;