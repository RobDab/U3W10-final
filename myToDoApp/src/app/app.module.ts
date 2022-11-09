import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListPage } from './to-do-list/to-do-list.page';
import { ToDoCompletedPage } from './to-do-completed/to-do-completed.page';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListPage,
    ToDoCompletedPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
