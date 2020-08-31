import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { BreakpointObserver, Breakpoints,BreakpointState} from '@angular/cdk/layout';

import { AsideService } from '@app/core/services/layout/aside.service';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styles: []
})
export class AsideLeftComponent implements OnInit {
  env = environment;
  hideAsideOnClick: boolean = false;
  constructor(
    public breakpointObserver: BreakpointObserver,
    private asideService: AsideService,
  ) { 
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.hideAsideOnClick = true;
       
      }else{
        this.hideAsideOnClick = false;
      }
      console.log(
        'hideAsideOnClick',this.hideAsideOnClick
      );
    });
  }

 hideAside(): void {
   // Hiding aside on click on XSmall, Small, Medium devices
   if(this.hideAsideOnClick){
    this.asideService.setAside(false);
   }
 
  }

}
