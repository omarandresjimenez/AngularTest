import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { UserModel } from 'src/app/share/models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = new Observable<UserModel[]>();
  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.users$ = this.service.getUsers();
  }

  getDetails(user: UserModel): void {
    this.router.navigateByUrl('/users/' + user.id, { state: user });
  }
}
