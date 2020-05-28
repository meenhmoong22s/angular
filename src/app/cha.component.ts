import { Component, ViewChild } from '@angular/core';
// thêm component chit
import { ChitComponent } from './chit.component';
@Component({
    selector: 'app-cha',
    template: `
        <!-- <button (click)="child.value = child.value + 1">add for chit</button> -->
        <!-- cách 1 gọi từ cha sang con -->
        <!-- <app-chit #child></app-chit> -->
        <button (click)="onAddForChild()">add for chit</button>
        <!-- cách 2 gọi từ cha sang con  thêm viewchild -->
        <app-chit></app-chit>
        `
})
export class ChaComponent
{
    // syntax call chit
    @ViewChild( ChitComponent )
    myChild: ChitComponent;

    onAddForChild ()
    {
        this.myChild.value++;
    }
 }
