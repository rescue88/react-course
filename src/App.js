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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile posts={props.posts} /> } />
          <Route path="/dialogues" render={ () => <Dialogues dialogues={props.dialogues} messages={props.messages} /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/settings" render={ () => <Settings /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
