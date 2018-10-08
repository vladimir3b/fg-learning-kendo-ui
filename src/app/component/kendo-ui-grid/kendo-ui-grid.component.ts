import { Component, OnInit } from '@angular/core';

import { State, SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { 
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent,
  RowClassArgs
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
  public multiple = false;
  public allowUnsort = true;
  public sort: Array<SortDescriptor> = [];
  private items: any[] = this.myFriends;

  constructor() {
      this.loadData();
  }
  
  ngOnInit() {}

  public pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadData();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;  
    this.loadData();
  }

  private loadData(): void {
    this.gridView = {
        data: orderBy(this.items, this.sort).slice(this.skip, this.skip + this.pageSize),
        total: this.items.length
    };
  }


  private colorRows(context: RowClassArgs): Object {
    return {
      'bg-light': context.index % 2 === 0,
      'text-dark': context.index % 2 === 0,
      'bg-secondary': context.index % 2 !== 0,
      'text-light': context.index % 2 !== 0
    };
  }

}
