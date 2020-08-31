import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { environment } from '@env/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  env = environment;
  title = 'Dashboard';
  public constructor(private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( this.title );
  }

}
