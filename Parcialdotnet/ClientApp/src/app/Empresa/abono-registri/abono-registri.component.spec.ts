import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonoRegistriComponent } from './abono-registri.component';

describe('AbonoRegistriComponent', () => {
  let component: AbonoRegistriComponent;
  let fixture: ComponentFixture<AbonoRegistriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonoRegistriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonoRegistriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
