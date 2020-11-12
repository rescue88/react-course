import { addMessageCreator, updateNewMessageValueCreator } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';

const DialoguesContainer = (props) => {
    //add a message after button clicked
    const addMessage = () => {
        props.dispatch(addMessageCreator());
    }
    //rerender tree after textarea changes
    const updateNewMessageValue = (text) => {
        let action = updateNewMessageValueCreator(text);
        props.dispatch(action);
    }

    return (
        <Dialogues dialogues={ props.dialoguesData.dialogues } 
                    messages={ props.dialoguesData.messages } 
                    newMessageValue = { props.dialoguesData.newMessageValue } 
                    addMessage={ addMessage } 
                    updateNewMessageValue={ updateNewMessageValue } />
    );
}

export default DialoguesContainer;