import { NavLink } from 'react-router-dom';
import st from './../Dialogues.module.css';

const DialogItem = (props) => {
    let path = `/dialogues/${props.id}`;
    return (
        <div className={`${st.dialog} ${st.active}`}>
            <NavLink to={path} activeClassName={st.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;