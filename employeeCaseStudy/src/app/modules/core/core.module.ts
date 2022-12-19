import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CoreRoutingModule } from './core-routing.modules';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginReducer } from './store/reducers/login.reducers';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'; 
import { CoreService } from './services/core.service';
import { EmployeeReducer } from './store/reducers/Employee.reducers';
import { EmployeeEffects } from './store/effects/employee.effects';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,  
    ReactiveFormsModule,
    FlexLayoutModule, 
    StoreModule.forFeature('login', LoginReducer),
    StoreModule.forFeature('employee', EmployeeReducer),
  ],
  providers: [
    CoreService,
  ]
})
export class CoreModule { }
