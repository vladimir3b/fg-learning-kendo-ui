import { Route } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { KendoUiWindowComponent } from './component/kendo-ui-window/kendo-ui-window.component';
import { KendoUiGridComponent } from './component/kendo-ui-grid/kendo-ui-grid.component';
import { KendoUiTabstripComponent } from './component/kendo-ui-tabstrip/kendo-ui-tabstrip.component';

interface IRoute extends Route {
  caption?: string;
}

const APP_ROUTES: Array<IRoute> = [ 
  {
    caption: 'Chapter 01 - Window',
    path: 'window',
    component: KendoUiWindowComponent
  },
  {
    caption: 'Chapter 02 - Grid',
    path: 'grid',
    component: KendoUiGridComponent
  },
  {
    caption: 'Chapter 03 - Tabstrip',
    path: 'tabstrip',
    component: KendoUiTabstripComponent
  }
];

export {
  IRoute,
  APP_ROUTES
};
