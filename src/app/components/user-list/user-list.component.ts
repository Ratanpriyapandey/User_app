import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../../model/user';
import { UserListService } from '../../services/user.service';
import { HttpClient } from "@angular/common/http";

import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class UserListComponent implements OnInit {
  public searchText: string;
  public userDetail: List[] = [];
  constructor( private router: Router, private userService: UserListService
  ) { }

  ngOnInit() {
      this.loadAllUserList();
  }
  loadAllUserList() {
      this.userDetail = this.userService.getAlluserList();
  }

  onClickEditUserDetail(id) {

      this.router.navigate(['/user-details'], {queryParams: {id: id}});
      //queryParams is observable
  }

  onClickAddUser() {
      this.router.navigate(['/user-details']);
  }
  getallAfterRefresh()
  {
    this.userDetail = this.userService.getAfterRefresh();
  }
  onClickUserDelete(id) {
      this.userService.deleteUserDetail(id);
      this.loadAllUserList();
  }

}
