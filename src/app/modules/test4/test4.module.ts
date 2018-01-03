import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module Dependencies */

/* Containers */
import { Test4Component } from './containers/test4.component/test4.component';

/* Components */

/* Services */

/* Routes */
export const ROUTES: Routes = [
  { path: '', component: Test4Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    Test4Component
  ],
  providers: [],
  exports: []
})

export class Test4Module {}
