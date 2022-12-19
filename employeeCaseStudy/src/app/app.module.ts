import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects'; 
import { StoreModule } from '@ngrx/store';
import { LoginReducer } from './modules/core/store/reducers/login.reducers';
import { EmployeeReducer } from './modules/core/store/reducers/Employee.reducers';
import { EmployeeEffects } from './modules/core/store/effects/employee.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([
      EmployeeEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
