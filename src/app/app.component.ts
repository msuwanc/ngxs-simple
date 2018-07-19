import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CountState, Add, Delete } from './app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(CountState) count$: Observable<number>;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new Add());
  }

  onDelete() {
    this.store.dispatch(new Delete());
  }
}
