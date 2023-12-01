import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildrenOutletContexts , RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import { routeAnimations} from "./route-animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule , RouterOutlet , HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    routeAnimations,
  ]
})
export class AppComponent {
  title = 'ECommerce';
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
