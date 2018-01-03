import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module Dependencies */

/* Containers */
import { Test1Component } from './containers/test1.component/test1.component';

/* Components */

/* Services */

/* Routes */
export const ROUTES: Routes = [
  { path: '', component: Test1Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    Test1Component
  ],
  providers: [],
  exports: []
})

export class Test1Module {}
