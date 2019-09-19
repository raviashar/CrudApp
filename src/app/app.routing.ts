import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudApplicationComponent } from './crud-application/crud-application.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CrudApplicationComponent
  },
  {
    path: 'crudApplication',
    component: CrudApplicationComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
