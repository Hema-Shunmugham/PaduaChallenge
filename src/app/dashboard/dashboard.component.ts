import { Component, OnInit } from '@angular/core';
import { Data } from '../_model';
import {DataService} from "../_service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  balanceData: Data[] = [];

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.balanceData = this.dataService.getData();
  }

  goBack() : void {
    this.router.navigate(['/']);
  }

}
