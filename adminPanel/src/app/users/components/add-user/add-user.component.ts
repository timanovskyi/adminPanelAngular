import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private _service: UsersService) {
  }

  ngOnInit(): void {
    this.addUserForm = this._fb.group({
      'username': new FormControl('', [
          Validators.required
        ]
      ),
      'email': new FormControl('',
        [
          Validators.required,
          Validators.email
        ]),
      'phone': new FormControl('',
        [
          Validators.required,
          Validators.minLength(5)
        ]),
    })
  }

  onSubmit(event: any) {

    if (this.addUserForm.invalid) {
      return
    }

    this._service.addUser(this.addUserForm.value)
      .subscribe((data) => {
        this._snackBar.open(`User ${data.username} successfully created`);
        this.addUserForm.reset();
        Object.keys(this.addUserForm.controls).forEach(key => {
          this.addUserForm.controls[key].setErrors(null)
        });
      }, e => {
        this._snackBar.open(`Something is wrong`);
      })
  }
}
