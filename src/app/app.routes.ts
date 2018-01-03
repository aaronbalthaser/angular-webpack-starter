import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module Dependencies */

/* Services */
import { AppPreloader } from './app.preloader';

/* Routes */
const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test1' },
  { path: 'test1', loadChildren: './modules/test1/test1.module#Test1Module' },
  { path: 'test2', loadChildren: './modules/test2/test2.module#Test2Module' },
  { path: 'test3', loadChildren: './modules/test3/test3.module#Test3Module', data: { preload: true } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: AppPreloader })
  ],
  providers: [
    AppPreloader
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
