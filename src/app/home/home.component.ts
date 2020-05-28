import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tạo biến trong angular
    filterStatus = 'XEM_TAT_CA';
    en = 'Hello';
    vn = 'Xinh Chào';
    imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    forgot = true;
    name = '';
    evenStyle = { color: 'red', fontSize: '30px' };
    oddStyle = { color: 'black', fontSize: '20px' };
    currentClass = { circle: !this.forgot, square: this.forgot };
    isShow = true;
    arrSubjects = [ 'Angular', 'NodeJS', 'Python' ];
    // không cần dùng const trong đây
    newEn = '';
    newVn = '';
    isShowFrom = false;
    arrWords = [
        { id: 1, en: 'action', vn: 'hành động', memorized: true },
        { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
        { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
        { id: 4, en: 'active', vn: 'chủ động', memorized: true },
        { id: 5, en: 'bath', vn: 'tắm', memorized: false },
        { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
    ];
    // cách gọi function trong angular
    constructor() { }
    ngOnInit()
    {
     }
    toggleForgot()
    {
        this.forgot = !this.forgot;
    }
    showEvent(event)
    {
        this.name = event.target.value;
    }
    addWord()
    {
        this.arrWords.unshift( {
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            memorized: false
        } );
        this.newEn = '';
        this.newVn = '';
        this.isShowFrom = false;
    }

    removeWord(id: number)
    {
        const index = this.arrWords.findIndex( e => e.id === id );
        this.arrWords.splice(index, 1 );
    }
    getShowStatus( memorized: boolean)
    {
        const ifAll = this.filterStatus === 'XEM_TAT_CA';
        const ifGreen = this.filterStatus === 'XEM_GREEN' && memorized;
        const ifRed = this.filterStatus === 'XEM_RED' && !memorized;
        return ifAll || ifGreen || ifRed;
    }
}
