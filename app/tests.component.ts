import {Component} from 'angular2/core';

@Component ({
        selector: 'tests',
        template: `
                    <h2> Tests </h2>
                    {{title}}
                    <ul>
                        <li *ngFor = "#test of tests">
                            {{test}}
                        </li>
                    </ul>
                  `
})

export class TestsComponent{
    title = 'This isthe Test list';
    tests = ["test1","test2","test3"];
}