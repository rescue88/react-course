// styles
import './App.css';
// routing packages
import { BrowserRouter, Route } from 'react-router-dom';

// same components
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
// click and change component
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
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
        <Route path="/profile" render={ () => <Profile posts={props.state.profilePage.posts} addPost={props.addPost} /> } />
        <Route path="/dialogues" render={ () => <Dialogues dialogues={props.state.dialoguesPage.dialogues} messages={props.state.dialoguesPage.messages} /> } />
        <Route path="/news" render={ () => <News /> } />
        <Route path="/music" render={ () => <Music />} />
        <Route path="/settings" render={ () => <Settings /> } />
        <Route path="/friends" render={ () => <Friends /> } />
      </div>
    </div>
  );
}

export default App;
