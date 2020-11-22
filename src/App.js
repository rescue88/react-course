// styles
import './App.css';
// routing packages
import { Route } from 'react-router-dom';

// same components
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
// click and change component
import ProfileContainer from './components/Profile/ProfileContainer'
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
        <Route path="/dialogues" render={ () => <DialoguesContainer /> } />
        <Route path="/login" render={ () => <Login /> } />
        <Route path="/news" render={ () => <News /> } />
        <Route path="/music" render={ () => <Music /> } />
        <Route path="/settings" render={ () => <Settings /> } />
        <Route path="/users" render={ () => <UsersContainer /> } />
        <Route path="/friends" render={ () => <Friends /> } />
      </div>
    </div>
  );
}

export default App;
