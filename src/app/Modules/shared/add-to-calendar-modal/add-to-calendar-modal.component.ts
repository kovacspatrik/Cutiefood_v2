import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-to-calendar-modal',
  templateUrl: './add-to-calendar-modal.component.html',
  styleUrls: ['./add-to-calendar-modal.component.scss']
})
export class AddToCalendarModalComponent implements OnInit {
  @ViewChild('content') closeModal: ElementRef
  selected: Date = new Date();
  todaysDate: Date = new Date();

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'md', backdrop: true });
  }

  addToCalendar() {
    // BEVÁSÁRLÓLISTÁHOZ ADNI!
    console.log(this.selected);
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
  }

}
