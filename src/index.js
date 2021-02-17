import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import counterReducer from "./State/Reducers/counterReducer";

const store = createStore(counterReducer);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
