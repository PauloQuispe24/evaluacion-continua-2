import { Component } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-truncate',
  imports: [TruncatePipe, MaterialModule],
  templateUrl: './truncate.component.html',
  styleUrl: './truncate.component.css'
})
export class TruncateComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  goHome() {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }

}
