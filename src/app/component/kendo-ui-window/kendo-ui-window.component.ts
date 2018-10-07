import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-kendo-ui-window',
  templateUrl: './kendo-ui-window.component.html',
  styleUrls: ['./kendo-ui-window.component.scss']
})
export class KendoUiWindowComponent implements OnInit {

  public opened = false;
  public dataSaved = false;

  constructor() { }

  ngOnInit() {}
  

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
      this.dataSaved = true;
      this.close();
  }

}
