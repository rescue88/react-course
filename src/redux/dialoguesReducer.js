//describe actions
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA';

let initialState = {
  dialogues: [
    {id: 1, name: "Bohdan"},
    {id: 2, name: "Nikola"},
    {id: 3, name: "Arthur"},
    {id: 4, name: "Alex"},
    {id: 5, name: "Alice"},
  ],
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "Welcome to the course, bro"},
    {id: 3, message: "Heyoooou"},
    {id: 4, message: "Heyoooou"},
    {id: 5, message: "Heyoooou"},
  ],
  newMessageValue: '',
}

//action creator template for addMessage function
export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  }
}
//action creator template for onMessageChange function
export const updateNewMessageValue = (text) => {
  return {
      type: UPDATE_MESSAGE_TEXTAREA,
      newText: text,
  }
}
//return changed state after a right action
const dialoguesReducer = (state = initialState, action) => {
  switch(action.type) {
    //send new message by a click
    case ADD_MESSAGE:
      let text = state.newMessageValue;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: text}],
        newMessageValue: '',
      }
    //look for change in new message textarea
    case UPDATE_MESSAGE_TEXTAREA:
      return {
        ...state,
        newMessageValue: action.newText,
      }
    //return unchanged state if there is not a dialogues action
    default:
        return state;
  }
}

export default dialoguesReducer;