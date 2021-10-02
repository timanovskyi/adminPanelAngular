import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingModule } from './users/users-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => UsersRoutingModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
