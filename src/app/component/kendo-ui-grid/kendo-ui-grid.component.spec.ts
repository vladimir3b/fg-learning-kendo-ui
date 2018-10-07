import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUiGridComponent } from './kendo-ui-grid.component';

describe('KendoUiGridComponent', () => {
  let component: KendoUiGridComponent;
  let fixture: ComponentFixture<KendoUiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoUiGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoUiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
