import { Bookmark } from 'src/app/models/bookmark.class';
import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[Bookmark Component] Add',
  props<Bookmark>()
);

export const remove = createAction(
  '[Bookmark Component] Delete',
  props<{ id: number }>()
);

