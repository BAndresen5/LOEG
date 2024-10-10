import { Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { ChampionsComponent } from './champions/champions.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ScoringChampionsComponent } from './scoring-champions/scoring-champions.component';
import { StandingsComponent } from './standings/standings.component';

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
    path: 'scoring-champions',
    component: ScoringChampionsComponent
  },
  {
    path: 'standings',
    component: StandingsComponent
  },
  {
    path: 'home',
    component: LandingPageComponent
  }
];
