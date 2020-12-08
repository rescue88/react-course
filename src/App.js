//common
import React from 'react';
//styles
import './App.css';
//redux part
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import store from './redux/redux-store';
//same components
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
import Preloader from './components/Common/Preloader';
//Components
import ProfileContainer from './components/Profile/ProfileContainer'
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
//actions/thunks etc
import { initializeApp } from './redux/appReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
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
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);

const OZNetwork = (props) => {
  return (
    <BrowserRouter>
      <Provider store={ store }>
          <AppContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default OZNetwork;