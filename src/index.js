import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PreturiScreen from "./screens/PreturiScreen";
import NavbarComponent from "./components/NavbarComponent";
import {Routes} from "./Routes";
import Footer from "./components/Footer";
import ProgramareScreen from "./screens/ProgramareScreen";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ReduxThunk from 'redux-thunk';
import setSelectedServiciuReducer from './store/reducers/SelectedServiciuReducer';
import setSelectedFrizerIdReducer from "./store/reducers/SelectedFrizerReducer";
import fetchServiciiReducer from './store/reducers/FetchServiciiReducer';
import currentStepReducer from "./store/reducers/CurrentStepReducer";
import fetchFrizeriReducer from "./store/reducers/FetchFrizeriReducer";
import currentDayCalendarReducer from "./store/reducers/CurrentDayCalendarReducer";

const rootReducer = combineReducers({
    setSelectedServiciuReducer,
    fetchServiciiReducer,
    currentStepReducer,
    fetchFrizeriReducer,
    setSelectedFrizerIdReducer,
    currentDayCalendarReducer,
});

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <NavbarComponent routes={Routes}/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/preturi" component={PreturiScreen}/>
                <Route path="/programare" component={ProgramareScreen}/>
                {/*<Route exact path="/programare/stylist" component={}*/}
            </Switch>
            <Footer/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
