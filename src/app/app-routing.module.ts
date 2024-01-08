import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistComponent } from './components/regist/regist.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'users/list', component: UserListComponent},
    { path: 'users/login', component: LoginComponent},
    { path: 'users/register', component: RegistComponent}
];
@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[ RouterModule]
})
export class AppRouteModule{}