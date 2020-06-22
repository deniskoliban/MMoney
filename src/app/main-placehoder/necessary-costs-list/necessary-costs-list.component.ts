import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-necessary-costs-list',
  templateUrl: './necessary-costs-list.component.html',
  styleUrls: ['./necessary-costs-list.component.scss']
})
export class NecessaryCostsListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {}

}
