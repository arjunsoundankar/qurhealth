import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tabChange:String =  '';
  constructor() { }

  ngOnInit(): void {
  }

  onTabChanged(event: any) {
    console.log(event);
    this.tabChange=event.tab.textLabel;
  }

}
