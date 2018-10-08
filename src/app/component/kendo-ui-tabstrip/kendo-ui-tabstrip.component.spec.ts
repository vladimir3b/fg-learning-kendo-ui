import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUiTabstripComponent } from './kendo-ui-tabstrip.component';

describe('KendoUiTabstripComponent', () => {
  let component: KendoUiTabstripComponent;
  let fixture: ComponentFixture<KendoUiTabstripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoUiTabstripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoUiTabstripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
