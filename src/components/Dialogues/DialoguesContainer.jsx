import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { addMessage, updateNewMessageValue } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';

//function template to get main data from state
let mapStateToProps = (state) => {
    return {
        dialogues: state.dialoguesPage.dialogues,
        messages: state.dialoguesPage.messages,
        newMessageValue: state.dialoguesPage.newMessageValue,
    }
}

//create all context API containers to execute all functionality and place props into clear target Component
export default compose(
    connect (mapStateToProps, {
        addMessage,
        updateNewMessageValue,
    }),
    withAuthRedirect
)(Dialogues);