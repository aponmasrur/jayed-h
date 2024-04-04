import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkTopComponent } from './social-link-top.component';

describe('SocialLinkTopComponent', () => {
  let component: SocialLinkTopComponent;
  let fixture: ComponentFixture<SocialLinkTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinkTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialLinkTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
