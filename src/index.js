import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import rootReducer from "./store/reducers/index";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
