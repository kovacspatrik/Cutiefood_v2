import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-to-calendar-modal',
  templateUrl: './add-to-calendar-modal.component.html',
  styleUrls: ['./add-to-calendar-modal.component.scss'],
})
export class AddToCalendarModalComponent implements OnInit {
  @ViewChild('content') closeModal: ElementRef;
  selected: Date = new Date();
  todaysDate: Date = new Date();
  @Output() emitSelectedDate: EventEmitter<string> = new EventEmitter();

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'md', backdrop: true });
  }

  addToCalendar() {
    const selectedDate = `${this.selected.getFullYear()}-${
      this.selected.getMonth() + 1
    }-${this.selected.getDate()}`;
    this.emitSelectedDate.emit(selectedDate);
    console.log(selectedDate);
    this.modalService.dismissAll();
  }

  ngOnInit(): void {}
}
