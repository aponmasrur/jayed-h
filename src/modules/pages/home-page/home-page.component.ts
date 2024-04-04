import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { HeroComponent } from '../../pageContent/hero/hero.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MainLayoutComponent,HeroComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
