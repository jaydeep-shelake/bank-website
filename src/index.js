import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore,compose} from 'redux';
import reducers from './reducers'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App/>
</Provider>
);


