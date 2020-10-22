import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserListService } from '../../services/user.service';
import { List } from '../../model/user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public UserId: string;
  public userDetail = <List>{};
  public mode: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserListService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.UserId = params['id'];
          if (this.UserId !== undefined) {
                this.getUserDetailById(this.UserId);
                this.mode = 'Edit';
          }
        });
  }

  getUserDetailById(id) {
    this.userDetail = this.userService.getUserById(parseInt(id));
  }

    onUserSubmitForm(form) {

      if(form.valid) {
          this.userService.updateUserById(this.userDetail);
          this.router.navigate(['/user-list']);
      }
    }

    onClickUserDelete(id) {
      this.userService.deleteUserDetail(id);
  }
    onClickCancel() {
      this.router.navigate(['/user-list']);
    }


}
