import { Component } from '@angular/core';
import { SideHamburgerComponent } from '../side-hamburger/side-hamburger.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SideHamburgerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
