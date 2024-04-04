import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { cssFigma } from '@ng-icons/css.gg';
import { simpleUpwork } from '@ng-icons/simple-icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ cssFigma, simpleUpwork })],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
