/* ===ACTIONS=== */

const ADD_MESSAGE = 'dialoguesReducer/ADD-MESSAGE';

/* ===/ACTIONS=== */

/* ===STATE=== */

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
}

/* ===/STATE=== */

/* ===ACTION CREATORS=== */

//action creator template for addMessage function
export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  }
}

/* ===/ACTION CREATORS=== */

/* ===REDUCER LOGIC=== */

//return changed state after a right action
const dialoguesReducer = (state = initialState, action) => {
  switch(action.type) {
    //send new message by a click
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: action.message,}],
      }
    //return unchanged state if there is not a dialogues action
    default:
        return state;
  }
}

/* ===/REDUCER LOGIC=== */

export default dialoguesReducer;