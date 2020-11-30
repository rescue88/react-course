import Header from './Header';
import React from 'react';
import { logout } from './../../redux/authReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends React.Component {
    render = () => {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {
    logout,
})(HeaderContainer);