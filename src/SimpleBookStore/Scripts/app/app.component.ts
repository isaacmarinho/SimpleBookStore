import { Component, OnInit } from '@angular/core';
import { BookService, IBook } from './book.service';
import { BookForm } from './bookForm';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'my-app',
    templateUrl: './assets/templates/app.html'
})
export class AppComponent implements OnInit {
    subscription: Subscription;

    refresh() {
        this._service.LoadData().then(data => {
            this.books = data;
        })
    }
    constructor(private _service: BookService) {
        this.subscription = _service.RegenerateData$.subscribe(
            mission => {
                console.log("Good !! ", mission);
                this.refresh();
            });
    }

    ngOnInit() {
        this.refresh();
    }
    onUpdate(elem: any) {
        console.log(elem);
        this._service.Update(elem).then(data => {
        })
    }
    onDelete(elem: number) {
        console.log("Delete Form ! ");
        console.log(elem);
        this._service.Delete(elem).then(data => {
            this.refresh();
        })
    }
    books: IBook[] = [];

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}