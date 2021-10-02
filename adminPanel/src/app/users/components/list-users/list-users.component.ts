import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers: any[] = [];

  constructor(private _service: UsersService,
              private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this._service.listUsers().subscribe(v => {
      this.listUsers = v;
    })
  }

  deleteUser(id: any) {
    this._service.deleteUser(id)
      .subscribe(() => {
        this._snackBar.open(`User successfully deleted`);
        this.listUsers = this.listUsers.filter(v => v.id !== id);
      }, e => {
        console.log(e)
      })
  }
}
