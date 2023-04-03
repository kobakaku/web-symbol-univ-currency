import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from '../../../views/users/user/user.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { map, mergeMap, Observable, of } from 'rxjs';
import { User } from '../../../services/user/user.type';

@Component({
  selector: 'app-page-user',
  standalone: true,
  imports: [CommonModule, ViewUserComponent],
  template: ` <app-view-user [user]="user$ | async" />`,
  styles: [],
})
export class UserComponent {
  user$: Observable<User | null | undefined>;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.user$ = this.fetchUser$();
  }

  fetchUser$() {
    return this.route.paramMap.pipe(
      map((params) => params.get('userId')),
      mergeMap((id) => {
        if (id === null) {
          return of(null);
        }
        if (!id) {
          return of(undefined);
        }
        return this.userService.fetchUser$(id);
      })
    );
  }
}
