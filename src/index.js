import "dotenv/config";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import rootReducer from "./store/reducers/index";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { getFirebase } from "react-redux-firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import config from "./config/firebase";

import firebase from "firebase/app";
import "firebase/database";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk.withExtraArgument(getFirebase)];

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider
				firebase={firebase}
				config={config}
				dispatch={store.dispatch}
			>
				<App />
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
