import { Component } from '@angular/core';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-app';

  constructor(private authService: AuthService) { }

  login(islogged: boolean) {
    if (islogged) {
      this.authService.login();
    }
    else {
      this.authService.logout();
    }
  }
}
