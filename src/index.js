import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.sass';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import login from './reducers/loginReducer';
import route from './reducers/routeReducer';
import user from './reducers/userReducer';

const rootReducer = combineReducers({login, route, user});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
