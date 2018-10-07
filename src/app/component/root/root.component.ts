import { Component, OnInit } from '@angular/core';

import { APP_ROUTES, IRoute } from '../../app.router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fg-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  public currentUrl: string;
  public get caption(): string {
    const pathName: string = window.location.pathname.substring(1);
    if (pathName) {
      return APP_ROUTES.find((value: IRoute) => value.path === pathName).caption;
    } else {
      return 'Content';
    }    
  }

  constructor () {}

  ngOnInit() { }

}
