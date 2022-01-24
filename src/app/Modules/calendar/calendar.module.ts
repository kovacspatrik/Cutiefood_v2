import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { CalendarComponent } from './calendar/calendar.component';
import { DayCellComponent } from './day-cell/day-cell.component';


@NgModule({
    declarations: [
        CalendarComponent,
        DayCellComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class CalendarModule { }
