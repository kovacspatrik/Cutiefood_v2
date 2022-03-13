import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'src/app/Models/calendar-event.model';
import { Recipe } from 'src/app/Models/recipe.model';
import { User } from 'src/app/Models/user.model';
import { WeekDays } from 'src/app/Models/weekDays.model';
import { AuthService } from 'src/app/Services/auth.service';
import { CalendarService } from 'src/app/Services/calendar.service';

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

  user: User;
  userRecipes: CalendarEvent[] = [];

  constructor(
    private calendarService: CalendarService,
    private auth: AuthService
  ) {
    this.user = this.auth.getUser();
    this.getUserCalendar();
  }

  thisWeek: string[] = [];
  today = new Date(); // get current date
  todayCount = this.today.getDay();

  ngOnInit(): void {
    for (let i = 1; i <= 7; i++) {
      let monday = this.today.getDate() - this.today.getDay() + i;
      if (this.today.getDay() === 0) {
        monday = monday - 7;
      }
      let day = new Date(this.today.setDate(monday)).toISOString().slice(0, 10);
      this.weekDays[i - 1].date = day;
    }
  }

  getUserCalendar() {
    this.calendarService.getCalendarByUserId(this.user.id).subscribe((res) => {
      this.userRecipes = res;
    });
  }

  todayRecipes(date: string): CalendarEvent[] {
    let toReturn: CalendarEvent[] = [];
    this.userRecipes.forEach((event) => {
      if (event.date === date) {
        toReturn.push(event);
      }
    });
    return toReturn;
  }

  isToday(i: number): boolean {
    if (this.todayCount === 0) {
      return this.todayCount + 6 === i;
    }
    return this.todayCount - 1 === i;
  }

  reloadCalendar() {
    this.getUserCalendar();
  }
}
