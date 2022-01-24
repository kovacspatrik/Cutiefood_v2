import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';

import { SharedModule } from '../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [IndexPageComponent],
})
export class IndexPageModule {}
