import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import st from './Dialogues.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControl';
import { maxLengthCreator, required } from '../../utils/validators/validators';

//create a validate of maximum symbols
const maxLength20 = maxLengthCreator(20);

//create a form Component
let SendMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <Field name="message" component={ Textarea } placeholder="Enter your message"
                        validate={ [required, maxLength20] } />
            </div>
            <div>
                <button type="submit">Отправить</button>
            </div>
        </form>
    )
}

//reduxForm container to build a state part
SendMessageForm = reduxForm({
    form: 'messageTextarea',
})(SendMessageForm);

const Dialogues = ({ dialogues, messages, addMessage }) => {
    //get all dialog mates
    let dialoguesElements = dialogues.map( item => <DialogItem name={ item.name } id={ item.id } /> );
    //get all messages in the dialog
    let messagesElements = messages.map( item => <Message message={ item.message } id={ item.id } /> );

    //do smth after submit button clicked
    const onSubmit = (formData) => {
        addMessage(formData.message);
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