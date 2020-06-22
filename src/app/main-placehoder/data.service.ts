import { Expence } from './../shared/expence';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dialogDataArr: BehaviorSubject<Array<Expence>> = new BehaviorSubject<Array<Expence>>([]);

  constructor() {
    this.dialogDataArr.next([]);
  }

  nextValue(arr: Expence[]) {
    this.dialogDataArr.next(arr);
  }

  pushValue(expence: Expence) {
    const arr: Expence[] = this.dialogDataArr.value;
    arr.push(expence);
    this.dialogDataArr.next(arr);
  }

  spliceValue(index: number) {
    const arr: Expence[] = this.dialogDataArr.value;
    arr.splice(index, 1);
    this.dialogDataArr.next(arr);
  }

}
