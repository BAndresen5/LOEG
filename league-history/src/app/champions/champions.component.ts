import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../pipes/pipes.module';
import { ChampionService } from '../../api/champion/champion.service';
import { Champion } from '../../api/champion/champion';
import { OwnerService } from '../../api/owner/owner.service';
import { Owner } from '../../api/owner/owner';

@Component({
  selector: 'app-champions',
  standalone: true,
  imports: [
    TableModule,
    PipesModule
  ],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.scss'
})
export class ChampionsComponent implements OnInit {

  private championService = inject(ChampionService)
  private ownerService = inject(OwnerService)

  champions: Champion[] = []
  owners: Owner[] = []

  ngOnInit() {
    this.championService.getChampions().subscribe((response) => {
      this.champions = response
    })
    this.ownerService.getOwners().subscribe((response) => {
      this.owners = response
    })
  }

}
