import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
// thêm input vào để truyền biến
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  // cú pháp gọi Input
  @Input() name: string;
  @Input() age: number;
  @Output() myRemove = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  removeinchild()
  {
    this.myRemove.emit( this.name );
  }
}
