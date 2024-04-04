import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkTopComponent } from './nav-link-top.component';

describe('NavLinkTopComponent', () => {
  let component: NavLinkTopComponent;
  let fixture: ComponentFixture<NavLinkTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLinkTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavLinkTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
