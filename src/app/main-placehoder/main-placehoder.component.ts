import { DataService } from './data.service';
import { Expence } from './../shared/expence';
import { DialogComponent } from './dialog/dialog.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-placehoder',
  templateUrl: './main-placehoder.component.html',
  styleUrls: ['./main-placehoder.component.scss']
})
export class MainPlacehoderComponent implements OnInit, OnDestroy {
  sub: Subscription;
  dataArrayCopy: Expence[];
  firstDate: Date = new Date();
  secondDate: Date = new Date( this.firstDate.getFullYear(), this.firstDate.getMonth() + 1, 0);
  result: string;
  money: number;
  dateDiff: number;
  toggler: boolean;
  openCond = false;
  reqiredExpencesCostSum = 0;
  isBtnDisabled: boolean;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, public data: DataService) { }

  ngOnInit(): void {
    this.sub = this.data.dialogDataArr.subscribe((arr)=>{
      this.dataArrayCopy = arr;
      this.calcReqiredExpencesCostSum();
      this.isBtnDisabled = !arr.length;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggle() {
    this.openCond = !this.openCond;
  }

  firstDateInit(event) {
    this.firstDate = new Date(event.value);
  }

  secondDateInit(event) {
    this.secondDate = new Date(event.value);
  }

  calcDateDiff() {
    const oneDay = 1000 * 60 * 60 * 24;
    this.dateDiff = Math.ceil((this.secondDate.getTime() - this.firstDate.getTime()) / oneDay) + 1; }

  calcDateDiffAbility() {
    if (this.firstDate && this.secondDate) {
      this.calcDateDiff();
    }
  }

  clearExpences() {
    this.data.nextValue([]);    
  }

  calcReqiredExpencesCostSum() {
    if (this.dataArrayCopy.length) {
      this.reqiredExpencesCostSum = 0;
      this.dataArrayCopy.forEach((elem: Expence) => {
        this.reqiredExpencesCostSum += elem.cost;
      });
    }
  }

  calcMoney() {
    if (this.reqiredExpencesCostSum && (this.reqiredExpencesCostSum < this.money)) {
      this.money -= this.reqiredExpencesCostSum;
      console.log(this.money);
    }
  }

  calcMoneyADay() {
    this.calcMoney();
    this.calcDateDiffAbility();
    if (this.dateDiff && this.money) {
      this.result = (this.money / this.dateDiff).toFixed(2);
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  deleteRequiredExpence(i) {
    this.data.spliceValue(i); 
  }

  openSnackBar(event, action) {
    if (event.target.textContent && event.target.classList.contains('hover-finger')) {
      this.snackBar.open(`${event.target.textContent} is clickable`, action, { duration: 1000 });
    }
  }





}
