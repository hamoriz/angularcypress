import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker-input',
  templateUrl: './ticker-input.component.html',
  styleUrls: ['./ticker-input.component.css']
})
export class TickerInputComponent implements OnInit {

  value = 'BLK';

  constructor() { }

  ngOnInit(): void {
  }

  onClickEvent(): void {
    console.log('Ticker value is ' + this.value);
  }
}
