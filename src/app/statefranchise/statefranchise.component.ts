import { Component, OnInit } from '@angular/core';
import { StateDetails } from './state';
import { state } from './state-mock';
@Component({
  selector: 'app-statefranchise',
  templateUrl: './statefranchise.component.html',
  styleUrls: ['./statefranchise.component.scss']
})
export class StatefranchiseComponent implements OnInit {
  datastate = state;
  constructor() { }

  ngOnInit() {
  }

}
