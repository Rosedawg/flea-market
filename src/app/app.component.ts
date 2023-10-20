import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Domarringes klädmarknad';

  links = ['Start', 'Sälja', 'Köpa'];
  activeLink = this.links[0];
}
