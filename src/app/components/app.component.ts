import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResourcesService } from '../domain/resources.service';
import { NextStepsService } from '../domain/next-steps.service';
import { Resource } from '../domain/models/resource';
import { NextStep } from '../domain/models/next-step';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template';
  resources: Resource[] = [];
  nextSteps: NextStep[] = [];

  constructor(private resourcesService: ResourcesService, private nextStepsService: NextStepsService) {
    this.resources = this.resourcesService.listResources();
    this.nextSteps = this.nextStepsService.listSteps();
  }
}
