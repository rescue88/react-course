import { connect } from 'react-redux';
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

//place Component into containers to check if user has an access
const AuthRedirectComponent = withAuthRedirect(Dialogues);
//create another context API container to take state/dispatch
export default connect (mapStateToProps, {
    addMessage,
    updateNewMessageValue,
})(AuthRedirectComponent);