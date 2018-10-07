import { Component, OnInit } from '@angular/core';
import { IRoute, APP_ROUTES } from '../../app.router';

@Component({
  selector: 'fg-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public routes: Array<IRoute> = APP_ROUTES;
  constructor() { }

  ngOnInit() {}

}
