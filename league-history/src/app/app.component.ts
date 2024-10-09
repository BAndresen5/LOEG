import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { Owner } from '../api/owner/owner';
import { OwnerService } from '../api/owner/owner.service';
import { PipesModule } from './pipes/pipes.module';
import { ChampionsComponent } from './champions/champions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MembersComponent,
    ChampionsComponent,
    PipesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'league-history';

  owners: Owner[] = []
  bryceData: Owner = {}

  private ownerService = inject(OwnerService)

  ngOnInit() {
    this.ownerService.getOwners().subscribe((response) => {
      this.owners = response
    })
    this.ownerService.getOwner(1).subscribe((response) => {
      this.bryceData = response
    })
  }

}
