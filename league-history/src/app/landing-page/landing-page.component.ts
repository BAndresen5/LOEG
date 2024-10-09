import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PipesModule } from '../pipes/pipes.module';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ButtonModule,
    PipesModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
