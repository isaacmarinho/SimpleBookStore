import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

}
export interface IBook {
    id: number,
    title: string,
    author: string,
    genre: number,
    publisher: string,
    year: number
}