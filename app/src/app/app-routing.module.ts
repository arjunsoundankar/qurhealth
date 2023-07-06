import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(mod => mod.EmployeeModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then(mod => mod.DepartmentModule)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
