import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './components/App';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import { getEvents } from './actions/events.actions';
import { getUser } from './actions/user.action';



store.dispatch(getEvents());
store.dispatch(getUser())

ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>,
 
  document.getElementById('root')
);

