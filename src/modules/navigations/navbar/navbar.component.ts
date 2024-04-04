import { Component } from '@angular/core';
import { NavLinkTopComponent } from '../nav-link-top/nav-link-top.component';
import { CommonModule } from '@angular/common';
import { FeaturedSocialLinkTopComponent } from '../featured-social-link-top/featured-social-link-top.component';
import { SocialLinkTopComponent } from '../social-link-top/social-link-top.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavLinkTopComponent,CommonModule,FeaturedSocialLinkTopComponent,SocialLinkTopComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoUrl:string = 'assets/images/logos/logo-dark.jpg';
  parentLabel:string = 'Blogs'; 
  navLinksData = [
    {
      label:'Home',
      href:''
    },
    {
      label:'About me',
      href:'about-me'
    },
    {
      label:'Portfolio',
      href:'portfolio'
    },
    {
      label:'Blogs',
      href:'blogs'
    }
  ];

  socialLinksData = [
    {
      label:'youtube',
      shortName:'Yt',
      href:''
    },
    {
      label:'facebook',
      shortName:'Fb',
      href:''
    },
    {
      label:'instagram',
      shortName:'Ig',
      href:''
    },
    {
      label:'behance',
      shortName:'Be',
      href:''
    },
    {
      label:'linkedin',
      shortName:'ln',
      href:''
    }
  ];
}
