import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CalendarModule { }
