import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type artistsStateType = {
  artists: Array,
  +selectedArtist: string
};

export type Action = {
  +type: string
};

export type GetState = () => artistsStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
