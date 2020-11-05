import st from './../Dialogues.module.css';

const Message = (props) => {
    return ( 
        <div className={props.dialog}>
            {props.message}
        </div>
    );
}

export default Message;