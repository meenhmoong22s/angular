import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// bên này là HttpClient

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  onSubmit(data)
  {
    console.warn(data);
  }
  constructor() { }

  ngOnInit()
  {
  }

}
