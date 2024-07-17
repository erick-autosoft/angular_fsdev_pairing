import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  constructor() {}

  getTitle(): string {
    return 'Interview Project Task Listing';
  }
}
