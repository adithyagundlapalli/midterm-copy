import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeeklyGoalsService, WeeklyGoal } from '../../services/weekly-goals.service';

@Component({
  selector: 'app-weekly-goals-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weekly-goals-modal.component.html',
  styleUrl: './weekly-goals-modal.component.scss'
})
export class WeeklyGoalsModalComponent {
  goals: WeeklyGoal[] = [];
  newGoalText = '';
  
  constructor(
    private goalsService: WeeklyGoalsService,
    public dialogRef: MatDialogRef<WeeklyGoalsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.goalsService.goals$.subscribe(goals => {
      this.goals = [...goals];
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    this.goalsService.updateGoals(this.goals);
    this.dialogRef.close(this.goals);
  }

  onEnterNewGoal(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.newGoalText.trim()) {
      this.goalsService.addGoal(
        this.newGoalText,
        'quarterly goal...',
        'gray'
      );
      this.newGoalText = '';
    }
  }
}