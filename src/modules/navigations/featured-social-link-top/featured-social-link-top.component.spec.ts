import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSocialLinkTopComponent } from './featured-social-link-top.component';

describe('FeaturedSocialLinkTopComponent', () => {
  let component: FeaturedSocialLinkTopComponent;
  let fixture: ComponentFixture<FeaturedSocialLinkTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedSocialLinkTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedSocialLinkTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
