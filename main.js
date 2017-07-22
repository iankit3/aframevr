import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import selected from './reducers'
import Data from "./services/data-service"
import App from './app';
var initialState = [];

var img = "http://www.roadtovr.com/wp-content/uploads/2014/09/Venice.Still001.jpeg";
function getInitialState() {
    return Data.getData('https://demo0813639.mockable.io/getPanos').then((res) => {
        let store = createStore(selected, {data:res,selected:img});

          ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById("app")
            )

    })
}
getInitialState();