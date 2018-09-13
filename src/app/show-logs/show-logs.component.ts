import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-logs',
  templateUrl: './show-logs.component.html',
  styleUrls: ['./show-logs.component.css']
})
export class ShowLogsComponent implements OnInit {
  logsData: Object[] = [];
  extraLogs = false;
  expanded = true;

  constructor() {
  }

  ngOnInit() {
  }
  onAddLogs() {
    const timeStamp = Date.now();
    this.logsData.push(timeStamp);
    this.expanded = this.expanded ? false : true;
  }
}
