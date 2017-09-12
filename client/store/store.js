import { createStore } from 'redux';
import reducers from '../reducer/reducer';
import initState from './init-state';

let store = createStore(reducers, initState);

export default store;