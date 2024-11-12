import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface WeeklyGoal {
  id: number;
  text: string;
  completed: boolean;
  tag: string;
  tagColor: 'teal' | 'orange' | 'gray';
}

@Injectable({
  providedIn: 'root'
})
export class WeeklyGoalsService {
  private goals = new BehaviorSubject<WeeklyGoal[]>([
    {
      id: 1,
      text: 'Finish Google cover letter',
      completed: false,
      tag: '#apply-internships',
      tagColor: 'teal'
    },
    {
      id: 2,
      text: 'Apply to Microsoft',
      completed: false,
      tag: '#apply-internships',
      tagColor: 'teal'
    },
    {
      id: 3,
      text: 'Practice implementing data structure',
      completed: false,
      tag: '#interview-technical',
      tagColor: 'orange'
    }
  ]);
  goals$ = this.goals.asObservable();

  addGoal(text: string, tag: string, tagColor: 'teal' | 'orange' | 'gray') {
    const currentGoals = this.goals.value;
    const newGoal: WeeklyGoal = {
      id: currentGoals.length + 1,
      text,
      completed: false,
      tag,
      tagColor
    };
    this.goals.next([...currentGoals, newGoal]);
  }

  updateGoals(goals: WeeklyGoal[]) {
    this.goals.next(goals);
  }

  toggleGoalCompletion(id: number) {
    const currentGoals = this.goals.value;
    const updatedGoals = currentGoals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    this.goals.next(updatedGoals);
  }
} 