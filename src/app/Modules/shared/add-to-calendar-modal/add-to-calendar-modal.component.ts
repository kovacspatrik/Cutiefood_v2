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
    this.emitSelectedDate.emit(this.selected.toISOString().split('T')[0]);
    console.log(this.selected.toISOString().split('T')[0]);
    this.modalService.dismissAll();
  }

  ngOnInit(): void {}
}
