import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
    constructor(private _http: Http) { }
    private RegenerateData = new Subject<number>();
    // Observable string streams
    RegenerateData$ = this.RegenerateData.asObservable();

    AnnounceChange(mission: number) {

        this.RegenerateData.next(mission);
    }

    LoadData(): Promise<IBook[]> {
        return this._http.get('/api/books')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();

        return data || [];
    }

    Add(model: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        delete model["id"];
        let body = JSON.stringify(model);
        return this._http.post('/api/books/', body,
            options).toPromise().catch(this.handleErrorPromise);
    }

    Update(model: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(model);
        return this._http.put('/api/books/', body,
            options).toPromise().catch(this.handleErrorPromise);
    }

    Delete(id: number) {
        return this._http.delete('/api/books/?id=' +
            id).toPromise().catch(this.handleErrorPromise);
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
export interface IBook {
    id: number,
    title: string,
    author: string,
    genre: number,
    publisher: string,
    year: number
}