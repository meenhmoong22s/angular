import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-small',
  templateUrl: './app-small.component.html',
  styleUrls: ['./app-small.component.scss']
})
export class AppSmallComponent implements OnInit {
  onSubmit(data)
  {
    console.warn(data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
