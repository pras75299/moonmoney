import { Component, OnInit } from '@angular/core';
import { Accountt } from './account';
import { accnt } from './mock-account';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountDetail = accnt;
  constructor() { }

  ngOnInit() {
  }

}
