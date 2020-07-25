import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import loginReducerReducer from './store/reducers/login';
import userReduzerReducer from './store/reducers/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './assets/css/googleFont.css';
import './index.css';

const rootReducer = combineReducers({
  loginReducer: loginReducerReducer,
  userReducer: userReduzerReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
