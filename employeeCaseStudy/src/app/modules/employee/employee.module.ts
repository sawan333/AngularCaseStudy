import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.modules';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginReducer } from '../core/store/reducers/login.reducers';
import { StoreModule } from '@ngrx/store';
import { EmployeeReducer } from '../core/store/reducers/Employee.reducers';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature('login', LoginReducer),
    StoreModule.forFeature('employee', EmployeeReducer),
  ]
})
export class EmployeeModule { }
