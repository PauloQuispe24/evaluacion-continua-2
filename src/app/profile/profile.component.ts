import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  usuario: string | null = '';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    const token = this.authService.isLogin();
    if (!token) {
      this.router.navigate(['/login']);
    }
    this.usuario = sessionStorage.getItem('usuario');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goHome() {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }
}
