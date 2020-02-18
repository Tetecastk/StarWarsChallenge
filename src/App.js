import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Planets from './components/Planets';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }


  render() {
    return (
      <div>
        <div className="container">
            <Switch>
                <Route path="/" component={Planets} />
            </Switch>
        </div>
        <div>
          <button onClick={this.show.bind(this)}>show</button>

          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
            <div>Content</div>
          </Rodal>
        </div>
        <div id="background"></div>
        <div id="midground"></div>
      </div>
    );
  }
}

export default App;
