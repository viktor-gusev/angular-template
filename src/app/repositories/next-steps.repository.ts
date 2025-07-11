import { Injectable } from '@angular/core';
import { NextStep } from '../domain/models/next-step';

@Injectable({ providedIn: 'root' })
export class NextStepsRepository {
  private readonly nextSteps: NextStep[] = [
    { label: 'New Component', value: 'component' },
    { label: 'Angular Material', value: 'material' },
    { label: 'Add PWA Support', value: 'pwa' },
    { label: 'Add Dependency', value: 'dependency' },
    { label: 'Run and Watch Tests', value: 'test' },
    { label: 'Build for Production', value: 'build' }
  ];

  getNextSteps(): NextStep[] {
    return this.nextSteps;
  }
}
