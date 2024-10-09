import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { ChampionsComponent } from './champions/champions.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'champions',
    component: ChampionsComponent
  },
  {
    path: 'home',
    component: LandingPageComponent
  }
];
