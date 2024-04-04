import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social-link-top',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './social-link-top.component.html',
  styleUrl: './social-link-top.component.css'
})
export class SocialLinkTopComponent {
  @Input() label: string = 'unnamed';
  @Input() href: string = '';
  @Input() isFirst: boolean = false;

  
}
