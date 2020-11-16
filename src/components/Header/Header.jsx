import { NavLink } from 'react-router-dom';
import st from './Header.module.css';

const Header = (props) => {
    return (
        <header className={ st.header }>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" />
            <div className={ st.headerLoginBlock }>
                {
                    props.isAuth ? <div>Hello, {props.login}</div> : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;