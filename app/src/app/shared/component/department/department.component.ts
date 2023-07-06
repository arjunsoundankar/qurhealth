import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public departmentList: any = [];
  public employeeList: any = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getEmployee().subscribe(response => {
      this.employeeList = response.payload;
    })
    this.appService.getDepartmentList({}).subscribe(res => {
      
      if(res.isSuccess) {
        if(window.location.pathname.includes('dashboard')){
        this.departmentList = res.payload.filter((data: any)=>  
          data.isActive ===1
        )
        this.departmentList.map((list: any)=>{
          let emp = this.employeeList.filter((emp1: any)=> emp1.departmentId === list.id && emp1.isActive ===1);
        if(emp.length > 0){
          let salary = 0;    
            emp.map((element: any) => {
              salary = salary + parseInt(element.salaryCollection[0].salary);
            });
            list.salary = salary;
          }else{
            list.salary = 0;
          }
          
        })
      }
    
    else{
        this.departmentList = res.payload;
        this.departmentList.map((list: any)=>{
          let emp = this.employeeList.filter((emp1: any)=> emp1.departmentId === list.id && emp1.isActive ===1);
        if(emp.length > 0){
          let salary = 0;    
            emp.map((element: any) => {
              salary = salary + parseInt(element.salaryCollection[0].salary);
            });
            list.salary = salary;
          }else{
            list.salary = 0;
          }
        })
      }
    }
    });
  }

}
