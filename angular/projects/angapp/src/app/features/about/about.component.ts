import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  env = environment;
  title = 'About';
  public constructor(private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( this.title );
  }

}
