import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import { StateModule } from '../state/state.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoComponent } from '../components/todo/todo.component';


@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    StateModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, TodoComponent, TodoListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
