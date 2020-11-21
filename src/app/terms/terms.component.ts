import { Component, OnInit } from '@angular/core';
import { Terms } from './terms';
import { termss } from './term-mock';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  termsdetails = termss;
  constructor() { }

  ngOnInit() {
  }

}
