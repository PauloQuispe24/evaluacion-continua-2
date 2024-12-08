import { Component } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-truncate',
  imports: [TruncatePipe],
  templateUrl: './truncate.component.html',
  styleUrl: './truncate.component.css'
})
export class TruncateComponent {

}
