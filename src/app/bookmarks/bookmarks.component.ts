import { Group } from './../models/group.enum';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { remove, add } from './../bookmarks/store/actions/bookmarks.actions';
import { Observable, of } from 'rxjs';
import { Bookmark } from '../models/bookmark.class';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { tap, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;
  filteredBookmarks$: Observable<Bookmark[]>;
  form: FormGroup;
  fb: FormBuilder;
  selectedGroup = [Group.Work, Group.Leisure, Group.Personal];
  bookmarkGroups = Group;

  constructor(
    fb: FormBuilder,
    private store: Store<{ bookmarks: Bookmark[] }>
  ) {
    this.fb = fb;
    this.form = this.fb.group({
      id: [''],
      name: ['', [Validators.minLength(2), Validators.maxLength(32), Validators.required]],
      url: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.bookmarks$ = this.store.pipe(select('bookmarks'));
  }

  onSubmit() {
    const bookmark = new Bookmark(this.form.value.id, this.form.value.name, this.form.value.url, this.form.value.group);
    this.add(bookmark);
  }

  add(bookmark: Bookmark) {
    this.store.dispatch(add(bookmark));
  }

  remove(id) {
    this.store.dispatch(remove({ id }));
  }

  filterByGroup(group: Group) {
    this.filteredBookmarks$ = this.bookmarks$.pipe(
      map(bookmarks => bookmarks.filter(bookmark => bookmark.group === group))
    );
  }
}
