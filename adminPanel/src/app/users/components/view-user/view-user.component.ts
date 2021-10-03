import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit, OnDestroy {

  user: User = {} as User;

  private _sub = new Subscription();

  constructor(private _service: UsersService,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._sub.add(this._route.params.subscribe(p => {
        this.getDetails(p['id'])
      })
    )
  }

  ngOnDestroy() {
    this._sub.unsubscribe()
  }

  getDetails(id: any) {
    this._sub.add(this._service.userDetail(id)
      .subscribe((v) => {
        this.user = v
      })
    )
  }
}
