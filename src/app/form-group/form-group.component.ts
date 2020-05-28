import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.formLogin = this.fb.group( {
      // cách 2 Validators.required that mind k đc để trống
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.maxLength(25), Validators.minLength(8), Validators.pattern('[a-zA-Z ]*')]],
      re: false,
      // cách 1
      // email: new FormControl('buoyd.1998@gmail.com'),
      // password: new FormControl(),
      // re: new FormControl(true),
      // subject: this.fb.group( {
      // subject: new FormGroup( {
      //   N: new FormControl(),
      //   S: new FormControl(),
      //   V: new FormControl()
      // lấy giá trị của một group được bọc trong 1 thẻ div vs syntax formGroupName="subject"
      // })
    });
  }
  onSubmit()
  {
    console.log(this.formLogin.value);
  }
  // viết function cho validator
  // function gmailValidator ( formControl: FormControl )
  // {
  //   if (formControl.includes('@gmail.com')) {
  //     return null;
  //   }
  //   return { gmail: true };
  // }
}
