import { Component, OnInit } from '@angular/core';

import { State } from '@progress/kendo-data-query';
import { 
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent
} from '@progress/kendo-angular-grid';

import { MY_FRIENDS } from '../../data/my-friends.data';
import { IFriend } from '../../data/my-friend.interface';

@Component({
  selector: 'fg-app-kendo-ui-grid',
  templateUrl: './kendo-ui-grid.component.html',
  styleUrls: ['./kendo-ui-grid.component.scss']
})
export class KendoUiGridComponent implements OnInit {

  public myFriends: Array<IFriend> = MY_FRIENDS;  

  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  private items: any[] = this.myFriends;

  constructor() {
      this.loadItems();
  }
  
  ngOnInit() {}

  public pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadItems();
  }

  private loadItems(): void {
      this.gridView = {
          data: this.items.slice(this.skip, this.skip + this.pageSize),
          total: this.items.length
      };
  }

}
