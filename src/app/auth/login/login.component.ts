import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  login(usuario: HTMLInputElement, password: HTMLInputElement) {
    this.authService.login(usuario.value, password.value);
    this.router.navigateByUrl('/profile');
  }

  goHome() {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }
}
