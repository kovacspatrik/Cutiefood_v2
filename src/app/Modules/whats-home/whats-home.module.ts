import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { WhatsHomeComponent } from './whats-home/whats-home.component';


@NgModule({
  declarations: [
    WhatsHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WhatsHomeModule { }
