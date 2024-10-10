import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../pipes/pipes.module';
import { OwnerService } from '../../api/owner/owner.service';
import { ScoringChampionService } from '../../api/scoring-champion/scoring-champion.service';
import { Owner } from '../../api/owner/owner';
import { ScoringChampion } from '../../api/scoring-champion/scoring-champion';

@Component({
  selector: 'app-scoring-champions',
  standalone: true,
  imports: [
    TableModule,
    PipesModule
  ],
  templateUrl: './scoring-champions.component.html',
  styleUrl: './scoring-champions.component.scss'
})
export class ScoringChampionsComponent implements OnInit {

  private ownerService = inject(OwnerService)
  private scoringChampionService = inject(ScoringChampionService)

  owners: Owner[] = []
  scoringChampions: ScoringChampion[] = []

  ngOnInit() {
    this.scoringChampionService.getScoringChampions().subscribe((response) => {
      this.scoringChampions = response
    })
    this.ownerService.getOwners().subscribe((response) => {
      this.owners = response
    })
  }

}
