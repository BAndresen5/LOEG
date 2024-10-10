import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../pipes/pipes.module';
import { OwnerService } from '../../api/owner/owner.service';
import { Standings } from '../../api/standings/standings';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [
    TableModule,
    PipesModule
  ],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss'
})
export class StandingsComponent implements OnInit {

  private ownerService = inject(OwnerService)

  standings: (Standings[] | undefined)[] = []

  ngOnInit() {
    this.ownerService.getAllStandings().subscribe((response) => {
      this.standings = response
    })
  }

}
