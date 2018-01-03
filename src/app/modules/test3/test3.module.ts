import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module Dependencies */

/* Containers */
import { Test3Component } from './containers/test3.component/test3.component';

/* Components */

/* Services */

/* Routes */
export const ROUTES: Routes = [
  { path: '', component: Test3Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    Test3Component
  ],
  providers: [],
  exports: []
})

export class Test3Module {}
