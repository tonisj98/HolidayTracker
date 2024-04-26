// app.component.ts
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TableModule],
  standalone: true
})
export class AppComponent {
  cars = [
    {id: 1, brand: 'Toyota', model: 'Corolla'},
    {id: 2, brand: 'Honda', model: 'Civic'},
    {id: 3, brand: 'Ford', model: 'Focus'}
  ];
}
