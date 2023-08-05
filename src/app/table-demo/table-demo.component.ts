import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {DataService} from "../data.service";

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'email'];
  dataSource = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // @ts-ignore
    this.dataSource = this.dataService.getMockData();
  }


}


