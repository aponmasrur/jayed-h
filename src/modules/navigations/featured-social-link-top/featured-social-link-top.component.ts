import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapDribbble } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-featured-social-link-top',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ bootstrapDribbble})],
  templateUrl: './featured-social-link-top.component.html',
  styleUrl: './featured-social-link-top.component.css'
})
export class FeaturedSocialLinkTopComponent {

}
