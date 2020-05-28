import { Component } from '@angular/core';

@Component({
    selector: 'app-chit',
    template: `
        <h3>{{value}}</h3>
        `
})
export class ChitComponent
{
    value = 0;
 }
