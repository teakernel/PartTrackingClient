import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'items', pathMatch: 'full' },
];
@NgModule({
    imports:[ RouterModule.forRoot(routes)],
    exports:[ RouterModule]
})
export class AppRouteModule{}