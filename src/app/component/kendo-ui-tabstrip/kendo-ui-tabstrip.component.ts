import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-kendo-ui-tabstrip',
  templateUrl: './kendo-ui-tabstrip.component.html',
  styleUrls: ['./kendo-ui-tabstrip.component.scss']
})
export class KendoUiTabstripComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeTab(){ 
    console.log('He wanted to close me...');
  }

}
