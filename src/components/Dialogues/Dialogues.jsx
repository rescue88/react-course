import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import st from './Dialogues.module.css';

const Dialogues = (props) => {

    //get all dialog mates
    let dialogsElements = props.dialogues.map( item => <DialogItem name={item.name} id={item.id} /> );
    //get all messages in the dialog
    let messagesElements = props.messages.map( item => <Message message={item.message} /> );
    //send a message
    let newMessageElement = React.createRef();

    const addMessage = () => {
        let text = newMessageElement.current.value;
    }

    return (
        <div className={st.dialogues}>
            <div className={st.dialoguesItems}>
                { dialogsElements }
            </div>
            <div className={st.dialoguesMessages}>
                { messagesElements }
                <div>
                    <textarea ref={ newMessageElement }></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Отправить</button>
                </div>
            </div>  
        </div>
    );
}

export default Dialogues;