import { Component } from '@angular/core';
import { WeeklyGoalsComponent } from './weekly-goals/weekly-goals.component';
import { WeeklyGoalsModalComponent } from './weekly-goals-modal/weekly-goals-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WeeklyGoalsComponent, WeeklyGoalsModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }
}