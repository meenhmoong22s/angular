import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h3>{{value}}</h3>
        <!-- đặt sự kiện click trong component cha (thích đặt gì đặt) -->
        <!-- cách1 -->
        <!-- <app-child (myClick)="value = value + 1"></app-child> -->
        <!-- cách2 -->
        <!-- truyền đúng $event thì emit bên component con mới bắt được -->
        <app-child (myClick)="changeValue($event)"></app-child>
        `
})
export class ParentComponent
{
    value = 0;
    changeValue(isAdd: boolean)
    {
        if (isAdd) {
            this.value = this.value + 1;
        } else {
            this.value = this.value - 1;
        }
    }
 }
