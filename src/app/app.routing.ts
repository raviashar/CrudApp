import { Routes, RouterModule, Router } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Employees',
    pathMatch: 'full'
  },
  {
    path: 'Employees',
    component: EmployeeListComponent,
  },
  {
    path: 'Charts',
    component: ChartComponent,
  },
  {
    path: '**',
    redirectTo: '/Employees',
    pathMatch: 'full'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);

