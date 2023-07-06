import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employeeList: any = [];
  public isDashboard: boolean = false;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDepartmentWithAssociatedEmployees().subscribe(res => {
      if(res.isSuccess) {
        if(window.location.pathname.includes('dashboard')){
          this.isDashboard = true
        }else{
          this.isDashboard = false
        }
        this.employeeList = res.payload;
      }
    });
  }

}
