import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class SharedModule { }
