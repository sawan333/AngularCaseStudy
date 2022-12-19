import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full'
  },
  {
    path: 'core',
    loadChildren: () => import("./modules/core/core.module").then(m => m.CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
