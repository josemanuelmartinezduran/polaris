import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolarisComponent } from './templates/polaris/polaris.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PolarisComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
