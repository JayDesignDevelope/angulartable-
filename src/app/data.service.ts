import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mockData = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Robert Johnson', age: 28, email: 'robert@example.com' },
    { id: 4, name: 'Emily Brown', age: 22, email: 'emily@example.com' },
    // Add more dummy data as needed
  ];

  constructor() { }

  getMockData() {
    return this.mockData;
  }
}
