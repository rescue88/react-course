import { NavLink } from 'react-router-dom';
import st from './Nav.module.css';

const Navbar = () => {
    return (
      <nav className={st.nav}>
        <div className={st.item}>
          <NavLink to="/profile" activeClassName={st.active}>Profile</NavLink>
        </div>
        <div className={st.item}>
          <NavLink to="/dialogues" activeClassName={st.active}>Messages</NavLink>
        </div>
        <div className={st.item}>
          <NavLink to="/news" activeClassName={st.active}>News</NavLink>
        </div>
        <div className={st.item}>
          <NavLink to="/music" activeClassName={st.active}>Music</NavLink>
        </div>
        <div className={st.item}>
          <NavLink to="/settings" activeClassName={st.active}>Settings</NavLink>
        </div>
        <div className={st.item}>
          <NavLink to="/friends" activeClassName={st.active}>Friends</NavLink>
        </div>
      </nav>
    );
}

export default Navbar;