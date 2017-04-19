import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService, IBook } from './book.service';

@Component({
    moduleId: __filename,
    selector: 'book-form',
    templateUrl: '../assets/templates/bookForm.component.html'
})

export class BookForm {
    constructor(private _service: BookService) {

    }
    model = new Book(0, '', '', 0, '', 0);
    submitted = false;
    onSubmit() {
        console.log("Sumbitted Form ! ");
        this.submitted = true;
        this._service.Add(this.model).then(data => {
            this._service.AnnounceChange(1212);
        })
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}