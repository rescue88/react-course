import { addMessageCreator, updateNewMessageValueCreator } from '../../redux/dialoguesReducer';
import storeContext from '../../storeContext';
import Dialogues from './Dialogues';

const DialoguesContainer = () => {
    return (
        //use context
        <storeContext.Consumer> 
            { (store) => {
                let state = store.getState().dialoguesPage;
                //add a message after button clicked
                const addMessage = () => {
                    store.dispatch(addMessageCreator());
                }
                //rerender tree after textarea changes
                const updateNewMessageValue = (text) => {
                    let action = updateNewMessageValueCreator(text);
                    store.dispatch(action);
                }
                return <Dialogues dialogues={ state.dialogues } 
                                    messages={ state.messages } 
                                    newMessageValue = { state.newMessageValue } 
                                    addMessage={ addMessage } 
                                    updateNewMessageValue={ updateNewMessageValue } />
            }}
        </storeContext.Consumer>
    );
}

export default DialoguesContainer;