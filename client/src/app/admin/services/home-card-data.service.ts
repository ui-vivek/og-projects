import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeCardDataService {
  constructor() {}

  testFun() {
    return 5;
  }
}
