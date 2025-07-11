import { Injectable } from '@angular/core';
import { ResourcesRepository } from '../repositories/resources.repository';
import { Resource } from './models/resource';

@Injectable({ providedIn: 'root' })
export class ResourcesService {
  constructor(private repo: ResourcesRepository) {}

  listResources(): Resource[] {
    return this.repo.getResources();
  }
}
