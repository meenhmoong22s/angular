import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.scss']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date( 1998 / 26 / 2 );
  person = { name: 'Phong', age: '22' };
  // khi dữ liệu ở kiểu promise dùng pipe async
  address = Promise.resolve( '455 lê văn việt' );
  constructor() { }

  ngOnInit(): void {
  }

}
