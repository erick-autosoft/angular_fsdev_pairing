import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestAsyncString, TestData } from '../models/test-data';

@Injectable()
export class AppDataService {
  constructor(private client: HttpClient) {}

  getAsyncData(): Observable<TestData[]> {
    return this.client.get<TestData[]>(
      'https://my.api.mockaroo.com/test_data.json?key=15fd9a50'
    );
  }
}
