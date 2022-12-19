import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth.guard";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'employee',
        loadChildren: () => import("../employee/employee.module").then((m) => m.EmployeeModule),
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
    },
]; 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}