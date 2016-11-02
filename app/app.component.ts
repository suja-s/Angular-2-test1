import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {TestsComponent} from './tests.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular 2 </h1>
    <courses></courses>
    <authors></authors>
    <tests></tests>
    
    `,
    directives:[CoursesComponent,AuthorsComponent,TestsComponent]
})
export class AppComponent { }