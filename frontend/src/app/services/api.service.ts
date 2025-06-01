import { inject, Injectable } from '@angular/core';
import { DefaultService, Configuration } from '../api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly defaultService: DefaultService;

  constructor() {
    const http = inject(HttpClient);
    const config = new Configuration({ basePath: 'http://localhost:8000' });
    this.defaultService = new DefaultService(http, config);
  }

  getHelloMessage(): Promise<string> {
    return this.defaultService.getHello().toPromise();
  }

  // Add more API method wrappers here...
}
