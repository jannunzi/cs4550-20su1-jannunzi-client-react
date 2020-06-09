import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider, connect} from "react-redux"
import hello from './reducers/hello'
import counterReducer from "./reducers/counterReducer";
import HelloContainer from "./Hello";
import CounterComponent from "./components/CounterComponent";
import moduleReducer from './reducers/moduleReducer'
import lessonReducer from "./reducers/lessonReducer";
import widgetReducer from "./reducers/widgetReducer";
import ModuleListComponent from "./components/ModuleListComponent";
import ModuleListContainer from "./containers/ModuleListContainer";
import {ewq, rew, tre} from "./containers/ModuleListContainer";

// const store = createStore(counterReducer)
const reducers = combineReducers({
  moduleReducer, lessonReducer, widgetReducer
})
const store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      {/*<ModuleListContainer/>*/}
      {/*<CounterComponent/>*/}
      {/*<HelloContainer/>*/}
      {/*<HelloWorld messageProperty={'Hello World????'}/>*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
