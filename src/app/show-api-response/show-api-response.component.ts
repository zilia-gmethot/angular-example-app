import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-show-api-response',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './show-api-response.component.html',
  styleUrl: './show-api-response.component.css'
})
export class ShowApiResponseComponent {
  private httpClient = inject(HttpClient);

  apiResponse$ = this.httpClient.get<{ data: string }>("http://localhost:3000").pipe(
    map(response => response.data)
  );
}
