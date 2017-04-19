import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { BookForm } from './bookForm';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, BookForm],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }