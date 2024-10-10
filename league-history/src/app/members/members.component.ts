import { Component, inject, OnInit } from '@angular/core';
import { OwnerService } from '../../api/owner/owner.service';
import { Owner } from '../../api/owner/owner';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../pipes/pipes.module';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    TableModule,
    PipesModule
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent implements OnInit {

  private ownerService = inject(OwnerService)

  owners: Owner[] = []

  ngOnInit() {
    this.ownerService.getOwners().subscribe((response) => {
      this.owners = response
    })
  }

}
