import { Component, Output , EventEmitter} from '@angular/core';
// Output dùng để sử lý giữa các component con Input để giữa component cha và con
@Component({
    selector: 'app-child',
    template: `
        <button (click)="addForParent()">add</button>
        <button (click)="subForParent()">sub</button>
        `
})
export class ChildComponent
{
    // cú pháp dùng Output
    @Output() myClick = new EventEmitter<boolean>(); // syntax in typeScrip

    // hàm này dùng để bắt sự kiện bên component cha
    addForParent()
    {
        // emit để phát sinh sự kiện , thay true bằng 1000 sẽ báo lỗi do syntax in typeScrip
        this.myClick.emit(true);
    }
    subForParent()
    {
        // emit để phát sinh sự kiện
        this.myClick.emit(false);
    }
 }
