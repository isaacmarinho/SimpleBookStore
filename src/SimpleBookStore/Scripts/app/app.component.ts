import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<div><h1>{{pageTitle}}</h1></div>'
})
export class AppComponent {
    pageTitle: string = "Hi Angular 4!";
}