import { Component } from '@angular/core';
import { NavbarComponent } from '../../navigations/navbar/navbar.component';
import { HeroComponent } from '../../pageContent/hero/hero.component';
import { SidebarComponent } from '../../navigations/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent,HeroComponent,SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  name = 'jayed';
}
