import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.page.html',
  styleUrls: ['./test1.page.scss'],
})
export class Test1Page implements OnInit {

  columnBreak = 3; //Max number of colunms

  constructor() { }

  ngOnInit() {
  }

  startNewRow(index, count){
    return ((index) % count) === 0;
  }

}
