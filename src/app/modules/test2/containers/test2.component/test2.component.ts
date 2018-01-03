import { Component } from '@angular/core';
import { Router } from '@angular/router';

console.log('Test 2 Component - Lazy Loaded');

@Component({
  selector: 'test2',
  template: `
    <div>
      test2
      <button (click)="goToTest()">Go To Test 3</button>
    </div>
  `
})

export class Test2Component {
  constructor(private router: Router) {}

  public goToTest() {
    this.router.navigate(['/test3']);
  }
}
