import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './component/employee/employee.component';
import { DepartmentComponent } from './component/department/department.component';
import { EmailComponent } from './component/email/email.component';
import { SalaryModule } from '../salary/salary.module';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    SalaryModule,
    MatDividerModule
  ],
  exports: [EmployeeComponent, DepartmentComponent, EmailComponent]
})
export class SharedModule { }
