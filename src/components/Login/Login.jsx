import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../Common/FormsControls/FormsControl';
import { login } from './../../redux/authReducer'
import st from './Login.module.css';
import otherSt from './../Common/FormsControls/FormsControl.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div htmlFor="login">Enter login
                <Field name="email" component={ Input } placeholder="Email"
                        validate={ [required] } />
            </div>
            <div htmlFor="password">Enter password
                <Field name="password" type="password" component={ Input } placeholder="Password"
                        validate={ [required] } />
            </div>
            <div htmlFor="rememberMe">Remember me
                <Field name="rememberMe" component={ Input } type="checkbox" />
            </div>
            {
                props.error && <div className={ otherSt.formSummaryError }> { props.error } </div>
            }
            <div className={ st.submitBtn }>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div className={ st.login }>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {
    login,
})(Login);