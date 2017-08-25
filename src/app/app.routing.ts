import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ClubrosterComponent} from './clubroster/clubroster.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'roster',
    component: ClubrosterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
