import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module Dependencies */

/* Containers */
import { Test2Component } from './containers/test2.component/test2.component';

/* Components */

/* Services */

/* Routes */
export const ROUTES: Routes = [
  { path: '', component: Test2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    Test2Component
  ],
  providers: [],
  exports: []
})

export class Test2Module {}
