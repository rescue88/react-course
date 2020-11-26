import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../Common/FormsControls/FormsControl';
import st from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div htmlFor="login">Enter login
                <Field name="login" component={ Input } placeholder="Login"
                        validate={ [required] } />
            </div>
            <div htmlFor="password">Enter password
                <Field name="password" component={ Input } placeholder="Password"
                        validate={ [required] } />
            </div>
            <div htmlFor="rememberMe">Remember me
                <Field name="rememberMe" component={ Input } type="checkbox"
                        validate={ [required] } />
            </div>
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
        console.log(formData);
    }
    return (
        <div className={ st.login }>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    );
}

export default Login;