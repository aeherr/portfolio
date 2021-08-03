import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import 'video-react/dist/video-react.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="**" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
