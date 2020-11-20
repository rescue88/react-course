import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import st from './Dialogues.module.css';
import { Redirect } from 'react-router-dom';

const Dialogues = (props) => {
    //get all dialog mates
    let dialoguesElements = props.dialogues.map( item => <DialogItem name={ item.name } id={ item.id } /> );
    //get all messages in the dialog
    let messagesElements = props.messages.map( item => <Message message={ item.message } id={ item.id } /> );

    //add a message after button clicked
    const onAddMessage = () => {
        props.addMessage();
    }
    //rerender tree after textarea changes
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageValue(text);
    }

    //if you are not authorized, go to login
    if(!props.isAuth) {
        return <Redirect to="/login" />
    }
    //draw Component for authorized users
    return (
        <div className={ st.dialogues }>
            <div className={ st.dialoguesItems }>
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