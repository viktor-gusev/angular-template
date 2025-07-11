import { Injectable } from '@angular/core';
import { NextStepsRepository } from '../repositories/next-steps.repository';
import { NextStep } from './models/next-step';

@Injectable({ providedIn: 'root' })
export class NextStepsService {
  constructor(private repo: NextStepsRepository) {}

  listSteps(): NextStep[] {
    return this.repo.getNextSteps();
  }
}
