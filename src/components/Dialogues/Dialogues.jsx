import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import st from './Dialogues.module.css';

const Dialogues = (props) => {

    //get all dialog mates
    let dialogsElements = props.dialogues.map( item => <DialogItem name={item.name} id={item.id} /> );
    //get all messages in the dialog
    let messagesElements = props.messages.map( item => <Message message={item.message} /> );

    return (
        <div className={st.dialogues}>
            <div className={st.dialoguesItems}>
                { dialogsElements }
            </div>
            <div className={st.dialoguesMessages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogues;