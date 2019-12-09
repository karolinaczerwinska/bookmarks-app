import { Bookmark } from './../../../models/bookmark.class';
import { createReducer, on } from '@ngrx/store';
import { add, remove } from '../actions/bookmarks.actions';
import { Group } from 'src/app/models/group.enum';

export const initialState = [];

const bookmarkReducerPriv = createReducer(initialState,
  on(add, addBookmark),
  on(remove, removeBookmark)
);

function addBookmark(state, params) {
  return [...state, params];
}

function removeBookmark(state: Bookmark[], params) {
  return state.filter(bookmark => bookmark.id != params.id);
}

export function bookmarksReducer(state, action) {
  return bookmarkReducerPriv(state, action);
}
