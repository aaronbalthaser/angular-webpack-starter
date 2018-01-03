import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'test1',
  template: `
    <div>
      test1
      <button (click)="goToTest()">Go To Test 2</button>
    </div>
  `
})

export class Test1Component {
  constructor(private router: Router) {}

  public goToTest() {
    this.router.navigate(['/test2']);
  }
}
