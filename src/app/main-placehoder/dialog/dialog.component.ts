import { DataService } from './../data.service';
import { Expence } from '../../shared/expence';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  expence: Expence = {
    name: '',
    cost: null
  };

  constructor(public data: DataService) {}

  ngOnInit() {}

  addExpence() {
    this.data.pushValue(this.expence);
   
  }

}
