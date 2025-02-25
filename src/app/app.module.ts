import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,  
    TodoComponent  
  ],
  providers: [],
})
export class AppModule { }
