import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: 'users',
    component: ListUsersComponent
  },
  {
    path: 'roles',
    component: ListRolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
