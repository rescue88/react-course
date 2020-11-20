import { React } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//function template to get authorizing data from state
let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

//HOC for blocking pages for guests
const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth) {
            return <Redirect to="/login" />
        }
        return <Component { ...props } />
    }
    //get one more container with state information
    let connectContainer = connect(mapStateToPropsForRedirect)(RedirectComponent);
    //return Component with 2 containers
    return connectContainer;
}

export default withAuthRedirect;