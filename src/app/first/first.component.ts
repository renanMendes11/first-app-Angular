import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  newValue: string;

  constructor() { }

  ngOnInit() {
  }

  getValue(value) {
    this.newValue = value;
  }

  updateName() {
    this.name = this.newValue;
  }

}
