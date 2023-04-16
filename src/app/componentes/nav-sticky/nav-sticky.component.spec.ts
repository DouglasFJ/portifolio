import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStickyComponent } from './nav-sticky.component';

describe('NavStickyComponent', () => {
  let component: NavStickyComponent;
  let fixture: ComponentFixture<NavStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavStickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
