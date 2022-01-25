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
import { UploadNewRecipeComponent } from './upload-new-recipe/upload-new-recipe.component';
import { EventComponent } from "../calendar/event/event.component";
import { MatListModule } from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    MatListModule
  ],
  declarations: [
    RecipeCardComponent,
    RecipeDetailsModalComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RecipeCardListComponent,
    UploadNewRecipeComponent,
    EventComponent
  ],
  exports: [
    RecipeCardComponent,
    RecipeDetailsModalComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RecipeCardListComponent,
    NgSelectModule,
    UploadNewRecipeComponent,
    FormsModule,
    EventComponent,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class SharedModule {}
