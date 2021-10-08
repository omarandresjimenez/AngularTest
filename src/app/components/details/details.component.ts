import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserModel } from 'src/app/share/models/user.interface';

@Component({
  selector: 'app-details-nodes',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public userData!: UserModel;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.userData = <UserModel>this.location.getState();
  }

  back(): void {
    history.back();
  }

}
