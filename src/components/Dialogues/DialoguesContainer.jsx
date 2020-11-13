import { connect } from 'react-redux';
import { addMessageCreator, updateNewMessageValueCreator } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';
//function template to get dialogues info from state in connect
let mapStateToProps = (state) => {
    return {
        dialogues: state.dialoguesPage.dialogues,
        messages: state.dialoguesPage.messages,
        newMessageValue: state.dialoguesPage.newMessageValue,
    }
}
//function template to get callbacks and use dispatch in connect
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageValue: (text) => { dispatch(updateNewMessageValueCreator(text))},
        addMessage: () => { dispatch(addMessageCreator()) },
    }
}
//create our container component
const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;