// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const SELECT_ARTIST = 'SELECT_ARTIST';
export const SET_ARTISTS = 'SET_ARTISTS';

export function selectArtist(payload) {
  return {
    type: SELECT_ARTIST,
    payload
  };
}

export function setArtists(payload) {
  return {
    type: SET_ARTISTS,
    payload
  };
}

export function fetchListOfArtists() {
  return (dispatch: Dispatch, getState: GetState) => {
    const artists = []; //Will be replaced by an api call

    dispatch(setArtists(artists));
  };
}
