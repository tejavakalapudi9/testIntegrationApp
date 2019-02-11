// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import artists from './artists';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    artists
  });
}
