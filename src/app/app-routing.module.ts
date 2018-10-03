import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard';
import { AuthGuard } from './guards';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to dashboard
    { path: '**', redirectTo: '' }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
export const routing = RouterModule.forRoot(routes);
