import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import st from './Dialogues.module.css';
import { Field, reduxForm } from 'redux-form';

let SendMessageForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field name="message" component="textarea" placeholder="Enter your message" />
            </div>
            <div>
                <button type="submit">Отправить</button>
            </div>
        </form>
    )
}

SendMessageForm = reduxForm({
    form: 'messageTextarea',
})(SendMessageForm);

const Dialogues = (props) => {
    //get all dialog mates
    let dialoguesElements = props.dialogues.map( item => <DialogItem name={ item.name } id={ item.id } /> );
    //get all messages in the dialog
    let messagesElements = props.messages.map( item => <Message message={ item.message } id={ item.id } /> );

    const onSubmit = (formData) => {
        props.addMessage(formData.message);
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
                <SendMessageForm onSubmit= { onSubmit } />
            </div>
        </div>
    );
}

export default Dialogues;