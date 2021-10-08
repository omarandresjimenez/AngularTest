import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  get isHome(): boolean {
    return  location.pathname === '/users' ||  location.pathname === '/';
  }

  goBack(): void {
    history.back();
  }
}
