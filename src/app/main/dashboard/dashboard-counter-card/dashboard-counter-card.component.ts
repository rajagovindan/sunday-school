import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-dashboard-counter-card',
  templateUrl: './dashboard-counter-card.component.html',
  styleUrl: './dashboard-counter-card.component.scss'
})
export class DashboardCounterCardComponent {
  @Input() title!: string;
  @Input() count!: number;
  @Input() icon!: string;
  @Input() bgColor!: string;
}
