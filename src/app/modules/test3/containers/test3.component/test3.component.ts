import { Component } from '@angular/core';
import { Router } from '@angular/router';

console.log('Test 3 Component - Async Loaded');

@Component({
  selector: 'test2',
  template: `
    <div>
      test3
      <button (click)="goToTest()">Go To Test 4</button>
    </div>
  `
})

export class Test3Component {
  constructor(private router: Router) {}

  public goToTest() {
    this.router.navigate(['/test4']);
  }
}
