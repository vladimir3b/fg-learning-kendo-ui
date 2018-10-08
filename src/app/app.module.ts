import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';

import { KendoUiWindowComponent } from './component/kendo-ui-window/kendo-ui-window.component';
import { RootComponent } from './component/root/root.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.router';
import { HomeComponent } from './component/home/home.component';
import { KendoUiGridComponent } from './component/kendo-ui-grid/kendo-ui-grid.component';
import { KendoUiTabstripComponent } from './component/kendo-ui-tabstrip/kendo-ui-tabstrip.component';
import { LayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [
    KendoUiWindowComponent,
    RootComponent,
    HomeComponent,
    KendoUiGridComponent,
    KendoUiTabstripComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DialogsModule,
    RouterModule.forRoot([ { 
      path: '',
      component: HomeComponent
    }, ... APP_ROUTES ]),
    GridModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
