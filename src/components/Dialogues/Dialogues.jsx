import { NavLink } from 'react-router-dom';
import st from './Dialogues.module.css';

const DialogItem = (props) => {
    let path = `/dialogues/${props.id}`;
    return (
        <div className={`${st.dialog} ${st.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return ( 
        <div className={props.dialog}>
            {props.message}
        </div>
    );
}

const Dialogues = () => {
    let dialogues = [
        {id: 1, name: "Bohdan"},
        {id: 2, name: "Nikola"},
        {id: 3, name: "Arthur"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Alice"},
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Welcome to the course, bro"},
        {id: 3, message: "Heyoooou"},
        {id: 4, message: "Heyoooou"},
        {id: 5, message: "Heyoooou"},
    ];

    let dialogsElements = dialogues.map( item => <DialogItem name={item.name} id={item.id} /> );

    let messagesElements = messages.map( item => <Message message={item.message} /> );

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