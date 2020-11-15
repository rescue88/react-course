import { connect } from 'react-redux';
import { addMessage, updateNewMessageValue } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';
//function template to get dialogues info from state in connect
let mapStateToProps = (state) => {
    return {
        dialogues: state.dialoguesPage.dialogues,
        messages: state.dialoguesPage.messages,
        newMessageValue: state.dialoguesPage.newMessageValue,
    }
}
//execute connect function with a dialogues state after calling DialoguesContainer
export default connect (mapStateToProps, {
    addMessage,
    updateNewMessageValue,
})(Dialogues);