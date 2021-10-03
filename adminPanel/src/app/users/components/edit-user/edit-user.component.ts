import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {

  user: User = {} as User;
  editUserForm: FormGroup = new FormGroup({})
  showForm: boolean = false;

  private _sub = new Subscription();

  constructor(private _service: UsersService,
              private _fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private _route: ActivatedRoute) {
  }

  get disabledSubmit(): boolean {
    if (!this.user || !this.showForm) {
      return false
    }
    if (this.editUserForm.invalid) {
      return true
    }
    return this.user.email === this.editUserForm.get('email')?.value
      && this.user.phone === this.editUserForm.get('phone')?.value
  }

  ngOnInit(): void {
    this._sub.add(this._route.params.subscribe(p => {
        this._getDetails(p['id'])
      })
    )
  }

  ngOnDestroy() {
    this._sub.unsubscribe()
  }

  onSubmit($event: any) {
    if (this.editUserForm.invalid) {
      return
    }

    this._service.editUser(this.user.id, this.editUserForm.value)
      .subscribe((data) => {
        this._snackBar.open(`User ${data.username} successfully edit`);
      }, e => {
        this._snackBar.open(`Something is wrong`);
      })
  }

  private _getDetails(id: any) {
    this._service.userDetail(id)
      .pipe(take(1))
      .subscribe((v) => {
        this.user = v
        if (Object.keys(this.user).length > 0) {
          this._buildForm()
        }
      })
  }

  private _buildForm() {
    this.editUserForm = this._fb.group({
      'email': new FormControl(this.user.email,
        [
          Validators.required,
          Validators.email
        ]),
      'phone': new FormControl(this.user.phone,
        [
          Validators.required,
          Validators.minLength(3)
        ]),
    })

    this.showForm = true;
  }
}
