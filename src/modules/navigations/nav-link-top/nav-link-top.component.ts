import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link-top',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-link-top.component.html',
  styleUrl: './nav-link-top.component.css',
})
export class NavLinkTopComponent {
  @Input() label: string = 'unnamed';
  @Input() href: string = '';
  // constructor(label, href) {}
}
