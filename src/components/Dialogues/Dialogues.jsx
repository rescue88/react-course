import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import st from './Dialogues.module.css';

const Dialogues = (props) => {
    debugger;
    //get all dialog mates
    let dialoguesElements = props.dialogues.map( item => <DialogItem name={item.name} id={item.id} /> );
    //get all messages in the dialog
    let messagesElements = props.messages.map( item => <Message message={item.message} /> );

    //add a message after button clicked
    const onAddMessage = () => {
        props.addMessage();
    }
    //rerender tree after textarea changes
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageValue(text);
    }

    return (
        <div className={st.dialogues}>
            <div className={st.dialoguesItems}>
                { dialoguesElements }
            </div>
            <div className={st.dialoguesMessages}>
                <div>
                    { messagesElements }
                </div>
                <div>
                    <div>
                        <textarea onChange={ onMessageChange } value={ props.newMessageValue } placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={ onAddMessage }>Отправить</button>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Dialogues;