import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import Main from "./Main/components/Main";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
};

export default App;
