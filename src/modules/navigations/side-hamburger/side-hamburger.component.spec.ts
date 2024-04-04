import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideHamburgerComponent } from './side-hamburger.component';

describe('SideHamburgerComponent', () => {
  let component: SideHamburgerComponent;
  let fixture: ComponentFixture<SideHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideHamburgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
