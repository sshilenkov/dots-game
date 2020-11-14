import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PlayingField from 'components/playing-field/PlayingField';
import LeaderBoard from 'components/leader-board/LeaderBoard';

import store from 'redux/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="game-dots">
        <PlayingField />
        <LeaderBoard />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
