import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { PipesModule } from './pipes/pipes.module';
import { ChampionsComponent } from './champions/champions.component';
import { ScoringChampionsComponent } from './scoring-champions/scoring-champions.component';
import { StandingsComponent } from './standings/standings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MembersComponent,
    ChampionsComponent,
    PipesModule,
    ScoringChampionsComponent,
    StandingsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
