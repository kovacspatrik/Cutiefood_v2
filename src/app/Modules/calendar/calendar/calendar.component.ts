import { Component, OnInit } from '@angular/core';
import { WeekDays } from 'src/app/Models/weekDays.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  weekDays: WeekDays[] = [
    { name: 'H', date: null },
    { name: 'K', date: null },
    { name: 'Sze', date: null },
    { name: 'Cs', date: null },
    { name: 'P', date: null },
    { name: 'Szo', date: null },
    { name: 'V', date: null },
  ];

  thisWeek: string[] = [];
  today = new Date(); // get current date
  todayCount = this.today.getDay();

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 7; i++) {
      let monday = this.today.getDate() - this.today.getDay() + i;
      let day = new Date(this.today.setDate(monday)).toISOString().slice(0, 10);
      this.weekDays[i - 1].date = day;
    }
  }

  isToday(i: number): boolean {
    return this.todayCount - 1 === i;
  }
}
