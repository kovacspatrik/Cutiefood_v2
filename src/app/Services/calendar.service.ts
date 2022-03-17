import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  addToCalendarModel,
  CalendarEvent,
} from '../Models/calendar-event.model';

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

  addNewCalendarEvent(data: addToCalendarModel) {
    return this.http.post(`${environment.apiUrl}/user-calendar/create`, data);
  }

  deleteCalendarEvent(id: number) {
    return this.http.delete(
      `${environment.apiUrl}/user-calendar/delete_event/${id}`
    );
  }
}
