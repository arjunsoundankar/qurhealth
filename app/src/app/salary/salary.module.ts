import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSalaryStructureComponent } from './employee-salary-structure/employee-salary-structure.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];

@NgModule({
  declarations: [
    EmployeeSalaryStructureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [EmployeeSalaryStructureComponent]
})
export class SalaryModule { }
