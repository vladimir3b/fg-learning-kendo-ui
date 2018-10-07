import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUiWindowComponent } from './kendo-ui-window.component';

describe('KendoUiWindowComponent', () => {
  let component: KendoUiWindowComponent;
  let fixture: ComponentFixture<KendoUiWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoUiWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoUiWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
