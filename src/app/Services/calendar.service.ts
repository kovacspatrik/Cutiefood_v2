import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalendarEvent } from '../Models/calendar-event.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getCalendarByUserId(id: number): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(
      `${environment.apiUrl}/user-calendar/user/${id}`
    );
  }
}
