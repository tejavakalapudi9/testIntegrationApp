// @flow
import { SET_ARTISTS, SELECT_ARTIST } from '../actions/artists';
import type { Action } from './types';

const defaultState = {
  artists: [],
  selectedArtist: ''
};

export default function artists(state: {} = defaultState, action: Action) {
  switch (action.type) {
    case SET_ARTISTS:
      return { ...state, artists: action.payload };
    case SELECT_ARTIST:
      return { ...state, selectedArtist: action.payload };
    default:
      return state;
  }
}
