import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarInterface } from '../../models/nav-bar.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems: NavBarInterface[] = [
    { label: 'Quem Somos', routerLink: '' },
    { label: 'O Que Fazemos', routerLink: '' },
    { label: 'Nossos Clients', routerLink: '' },
  ];
}
