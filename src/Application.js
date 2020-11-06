import React , { Component } from 'react';
import allReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SignUp from '../Layouts/SignUp';
import { Field, reduxForm } from 'redux-form';
const store = createStore(allReducers);
 export default class Application extends Component{
  render(){
    return(
      <Provider store= {store}>
        <SignUp />
      </Provider>
    )
  }
}