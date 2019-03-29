import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VozThreadComponent } from './voz-thread/voz-thread.component';
import { VozThreadDetailComponent } from './voz-thread-detail/voz-thread-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'forum', component: VozThreadComponent },
  { path: 'thread/:id', component: VozThreadDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
