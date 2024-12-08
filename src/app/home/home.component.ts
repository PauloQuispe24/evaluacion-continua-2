import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor( private router: Router, private route: ActivatedRoute) {}

  goPerfil() {
    this.router.navigate(['/profile'], { relativeTo: this.route });
  }

  goTruncate() {
    this.router.navigate(['/truncate'], { relativeTo: this.route });
  }

}
