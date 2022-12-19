import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Employee } from '../../models/Employee';
import { GetEmployeeDetails } from '../../store/actions/employee.actions';
import { LogIn } from '../../store/actions/login.actions';
import { EmployeesState } from '../../store/reducers/Employee.reducers';
import { LoginState } from '../../store/reducers/login.reducers';
import { allEmployeesSelector } from '../../store/selectors/employee.selectors';
import { isLogged } from '../../store/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  employeeCred: Employee[] | undefined;
  isLogged: Subscription | undefined;
  employeeSubscription: Subscription | undefined;
  hideFlag: boolean = true;
  initializing: boolean = true;
  loginForm : FormGroup = new FormGroup({
    empId: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  constructor(
    private employeeStore: Store<EmployeesState>,
    private loginStore: Store<LoginState>,
    private router: Router,
  ){}

  ngOnInit(){
    this.isLogged = this.loginStore.select(isLogged)
    .subscribe({
      next: (isLogged) => {
        if(isLogged){
          this.router.navigate(['core', 'employee']);
          return;
        }
        if(this.initializing){
          this.initializing = false;
          this.getEmployeeDetails();
        }
      }
    })
  }

  getEmployeeDetails(){
    this.employeeSubscription = this.employeeStore.select(allEmployeesSelector)
    .subscribe({
      next: (data) => {
        if(data)
          this.employeeCred = [...data];
      }
    })
    this.employeeStore.dispatch(new GetEmployeeDetails());
  }

  doLogin(){
    if(this.loginForm.valid){
      console.log("loginForm", this.loginForm.getRawValue());
      var formValues = this.loginForm.getRawValue();
      var isMatched: boolean = false;
      this.employeeCred?.forEach((employeeCred, idx) => {
        console.log(`employeeCred ${idx}`, employeeCred);
        if(employeeCred.empId === formValues.empId && employeeCred.password === formValues.password){
          isMatched = true;
          console.log("login success");
          this.employeeStore.dispatch(new LogIn({empId: formValues.empId}));
        }
      })
      if(!isMatched){
        console.log("login failed!");
      }
    }
  }

  ngOnDestroy(){
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
    if(this.isLogged)
      this.isLogged.unsubscribe();
  }
}
