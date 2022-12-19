import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/modules/core/models/Employee';
import { GetEmployeeDetails } from 'src/app/modules/core/store/actions/employee.actions';
import { EmployeesState } from 'src/app/modules/core/store/reducers/Employee.reducers';
import { LoginState } from 'src/app/modules/core/store/reducers/login.reducers';
import { allEmployeesSelector } from 'src/app/modules/core/store/selectors/employee.selectors';
import { getLoggedEmp } from 'src/app/modules/core/store/selectors/login.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  loggedEmployeeId: string = "";
  employeeCred: Employee[] = [];
  loggedEmployee: Employee | undefined;


  constructor(
    private employeeStore: Store<EmployeesState>,
    private loginStore: Store<LoginState>,
  ){}
  ngOnInit(){
    this.getLoggedEmployeeDetails();
    this.getEmployeeDetails();
  }
  getEmployeeDetails(){
    this.employeeStore.select(allEmployeesSelector)
    .subscribe({
      next: (data) => {
        if(data){
          this.employeeCred = [...data];
          if(this.loggedEmployeeId != "")
            this.loggedEmployee = this.employeeCred.filter(employee => employee.empId === this.loggedEmployeeId)[0];
        }
      }
    })
  }

  getLoggedEmployeeDetails(){
    this.loginStore.select(getLoggedEmp)
      .subscribe({
        next: (data) => {
          this.loggedEmployeeId = data.empId
        },
        error: (data) => {
          this.loggedEmployeeId = ""
        }
      })
  }
}
