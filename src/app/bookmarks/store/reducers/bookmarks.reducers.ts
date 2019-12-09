import { Bookmark } from './../../../models/bookmark.class';
import { createReducer, on } from '@ngrx/store';
import { add, remove } from '../actions/bookmarks.actions';
import { Group } from '../../../models/group.enum';

export const initialState = [];

let latestBookmarkId = 1;

const bookmarkReducerPriv = createReducer(initialState,
  on(add, addBookmark),
  on(remove, removeBookmark)
);

function addBookmark(state, params: Bookmark) {
  params.id = incrementBookmarkId();
  return [...state, params];
}

function removeBookmark(state: Bookmark[], params) {
  return state.filter(bookmark => bookmark.id != params.id);
}

export function bookmarksReducer(state, action) {
  return bookmarkReducerPriv(state, action);
}

function incrementBookmarkId() {
  return latestBookmarkId++;
}
