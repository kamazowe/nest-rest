import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-angular';

  items$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  getItems(): void {
    this.items$ = this.http.get('api/items');
  }
}
