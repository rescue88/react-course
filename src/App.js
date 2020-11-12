// styles
import './App.css';
// routing packages
import { Route } from 'react-router-dom';

// same components
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
// click and change component
import Profile from './components/Profile/Profile';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
//functions

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={ () => <Profile profileData ={props.state.profilePage} dispatch = {props.dispatch} /> } />
        <Route path="/dialogues" render={ () => <DialoguesContainer dialoguesData={props.state.dialoguesPage} dispatch ={props.dispatch} /> } />
        <Route path="/news" render={ () => <News /> } />
        <Route path="/music" render={ () => <Music />} />
        <Route path="/settings" render={ () => <Settings /> } />
        <Route path="/friends" render={ () => <Friends /> } />
      </div>
    </div>
  );
}

export default App;
