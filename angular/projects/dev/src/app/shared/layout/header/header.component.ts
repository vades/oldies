import { Component, OnInit, Input } from '@angular/core';

import { LayoutService } from '@app/core/services/layout/layout.service';
import { AuthService } from '@app/core/services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  @Input() env: any = {};
  partials: any = {};
  userName: string = '';
  constructor(
    private layout: LayoutService,
     public authService: AuthService,
  ) {
    
   }

  ngOnInit() {
    this.userName = this.authService.getUserName();
  }

}
