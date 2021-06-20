import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';

/**
 * Created store to store product app data
 */
export const store = createStore(RootReducer);
