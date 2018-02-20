import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import App from './App';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import Landing from './containers/Landing'
import Quiz from './containers/Quiz'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <HashRouter hashType="slash">
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          {/* <Route path="/home" render={(props) => <Home auth={auth} {...props} />} /> */}
          <Route path="/home" render={(props) => <Landing auth={auth} {...props} />} />
          <Route path="/quiz" render={(props) => <Quiz auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </HashRouter>
  );
}
