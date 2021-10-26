import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// When we import it, we call the function and get store back and we can directly use it
export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}