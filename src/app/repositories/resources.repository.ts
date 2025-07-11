import { Injectable } from '@angular/core';
import { Resource } from '../domain/models/resource';

@Injectable({ providedIn: 'root' })
export class ResourcesRepository {
  private readonly resources: Resource[] = [
    { label: 'Learn Angular', href: 'https://angular.io/tutorial' },
    { label: 'CLI Documentation', href: 'https://angular.io/cli' },
    { label: 'Angular Material', href: 'https://material.angular.io' },
    { label: 'Angular Blog', href: 'https://blog.angular.io' },
    { label: 'Angular DevTools', href: 'https://angular.io/devtools/' }
  ];

  getResources(): Resource[] {
    return this.resources;
  }
}
