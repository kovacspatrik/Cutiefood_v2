import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailsModalComponent } from './recipe-details-modal/recipe-details-modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login/login.component';
import { RecipeCardListComponent } from './recipe-card-list/recipe-card-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EventComponent } from '../calendar/event/event.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { UploadEditRecipeModalComponent } from './upload-edit-recipe-modal/upload-edit-recipe-modal.component';
import { MatSliderModule } from '@angular/material/slider';
import { AreYouSureDeleteModalComponent } from './are-you-sure-delete-modal/are-you-sure-delete-modal.component';
import { AddToCalendarModalComponent } from './add-to-calendar-modal/add-to-calendar-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';
import { MatOptionModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    MatListModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    RecipeCardComponent,
    RecipeDetailsModalComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RecipeCardListComponent,
    EventComponent,
    UploadEditRecipeModalComponent,
    AreYouSureDeleteModalComponent,
    AddToCalendarModalComponent,
    RegistrationModalComponent,
  ],
  exports: [
    RecipeCardComponent,
    RecipeDetailsModalComponent,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RecipeCardListComponent,
    NgSelectModule,
    FormsModule,
    EventComponent,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    UploadEditRecipeModalComponent,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatOptionModule,
    MatInputModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
