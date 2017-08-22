import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowDetailComponent } from './fellow-detail.component';

describe('FellowDetailComponent', () => {
  let component: FellowDetailComponent;
  let fixture: ComponentFixture<FellowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
