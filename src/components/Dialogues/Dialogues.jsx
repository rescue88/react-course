import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import st from './Dialogues.module.css';
import { addMessageCreator, updateNewMessageValueCreator } from './../../redux/dialoguesReducer';

const Dialogues = (props) => {
    //get all dialog mates
    let dialogsElements = props.state.dialogues.map( item => <DialogItem name={item.name} id={item.id} /> );
    //get all messages in the dialog
    let messagesElements = props.state.messages.map( item => <Message message={item.message} /> );
    //store newMessageValue in a local variable
    let newMessageValue = props.state.newMessageValue;

    //add a message after button clicked
    const addMessage = () => {
        props.dispatch(addMessageCreator());
    }
    //rerender tree after textarea changes
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageValueCreator(text));
    }

    return (
        <div className={st.dialogues}>
            <div className={st.dialoguesItems}>
                { dialogsElements }
            </div>
            <div className={st.dialoguesMessages}>
                <div>
                    { messagesElements }
                </div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange} value={newMessageValue} placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={ addMessage }>Отправить</button>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Dialogues;