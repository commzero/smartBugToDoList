import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksMainPageComponent } from './modules/tasks/pages/tasks-main-page/tasks-main-page.component';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: TasksMainPageComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
