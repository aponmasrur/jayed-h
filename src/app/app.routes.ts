import { Routes } from '@angular/router';
import { HomePageComponent } from '../modules/pages/home-page/home-page.component';
import { PortfolioComponent } from '../modules/pages/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  }
];
