// styles
import './App.css';
// routing packages
import { Route } from 'react-router-dom';

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
        <Route path="/profile" render={ () => <Profile 
                                                posts={props.state.profilePage}
                                                addPost={props.addPost} 
                                                updateNewPostValue={props.updateNewPostValue}
                                                newPostValue = {props.state.profilePage.newPostValue} /> } />
        <Route path="/dialogues" render={ () => <Dialogues
                                                  dialogues={props.state.dialoguesPage} 
                                                  messages={props.state.dialoguesPage} /> } />
        <Route path="/news" render={ () => <News /> } />
        <Route path="/music" render={ () => <Music />} />
        <Route path="/settings" render={ () => <Settings /> } />
        <Route path="/friends" render={ () => <Friends /> } />
      </div>
    </div>
  );
}

export default App;
