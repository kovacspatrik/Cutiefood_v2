import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Modules/shared/shared.module';
import { IndexPageModule } from './Modules/index-page/index-page.module';
import { MyFavoriteRecipesModule } from './Modules/my-favorite-recipes/my-favorite-recipes.module';
import { MyRecipesModule } from "./Modules/my-recipes/my-recipes.module";
import { CalendarModule } from "./Modules/calendar/calendar.module";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ShoppingListModule } from "./Modules/shopping-list/shopping-list.module";
import { WhatsHomeModule } from "./Modules/whats-home/whats-home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexPageModule,
    SharedModule,
    MyFavoriteRecipesModule,
    NgSelectModule,
    FormsModule,
    MyRecipesModule,
    CalendarModule,
    ShoppingListModule,
    WhatsHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
