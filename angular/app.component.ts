import { Component } from '@angular/core';
import { AuthenticationService } from '../app/services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(private auth: AuthenticationService) {
    if(sessionStorage != null){
      this.auth.user = JSON.parse(sessionStorage.getItem('player'));
    }
  }

  logout(): void {
    this.auth.logout().subscribe(response => console.log(response));
  }
}