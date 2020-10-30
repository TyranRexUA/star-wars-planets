import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import planetsReducer from './planetsReducer';
import currentPlanetReducer from './currentPlanetReducer';
import searchFormReducer from './searchFormReducer';

const reducers = combineReducers({
    planets: planetsReducer,
    currentPlanet: currentPlanetReducer,
    searchForm: searchFormReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // ReduxDevTools for Chrome
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)))

export default store;