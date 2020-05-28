import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    { name: 'ti' , age: 10},
    { name: 'teo', age: 15},
    { name: 'te', age: 11}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  removePersonByName(name: string)
  {
    const index = this.arrPeople.findIndex( e => e.name === name );
    this.arrPeople.splice( index, 1 );
  }

}
