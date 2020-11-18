import Header from './Header';
import React from 'react';
import { setAuthUserData } from './../../redux/authReducer';
import { connect } from 'react-redux';
import { headerAPI } from '../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.checkAuth().then(data => {
           if(data.resultCode === 0) {
               let { id, email, login} = data.data;
               this.props.setAuthUserData(id, email, login);
           }
        });
    };

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
    setAuthUserData
})(HeaderContainer);