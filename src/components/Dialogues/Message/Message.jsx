import st from './../Dialogues.module.css';

const Message = (props) => {
    return ( 
        <div key={ props.id } className={ st.messageItem }>
            { props.message }
        </div>
    );
}

export default Message;