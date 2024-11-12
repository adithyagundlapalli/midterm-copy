import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WeeklyGoalsService, WeeklyGoal } from '../../services/weekly-goals.service';
import { MatDialog } from '@angular/material/dialog';
import { WeeklyGoalsModalComponent } from '../weekly-goals-modal/weekly-goals-modal.component';

@Component({
  selector: 'app-weekly-goals',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './weekly-goals.component.html',
  styleUrl: './weekly-goals.component.scss'
})
export class WeeklyGoalsComponent {
  goals$;

  constructor(
    private goalsService: WeeklyGoalsService,
    private dialog: MatDialog
  ) {
    this.goals$ = this.goalsService.goals$;
  }

  onToggleComplete(id: number) {
    this.goalsService.toggleGoalCompletion(id);
  }

  openModal(goal?: WeeklyGoal) {
    const dialogRef = this.dialog.open(WeeklyGoalsModalComponent, {
      data: goal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the result from modal if needed
      }
    });
  }
}