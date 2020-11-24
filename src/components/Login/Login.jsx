import { Field, reduxForm } from 'redux-form';
import st from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <div htmlFor="login">Enter login
                <Field name="login" component="input" placeholder="Login" />
            </div>
            <div htmlFor="password">Enter password
                <Field name="password" component="input" placeholder="Password" />
            </div>
            <div htmlFor="rememberMe">Remember me
                <Field name="rememberMe" component="input" type="checkbox" />
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