import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'', component: LoginComponent, outlet: "external"},
  {path:'register', component: RegisterComponent, outlet: "external"},
  {path:'dashboard', component: DashboardComponent, outlet: "internal"},
  {path: 'result', component: ResultComponent, outlet: "internal" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
