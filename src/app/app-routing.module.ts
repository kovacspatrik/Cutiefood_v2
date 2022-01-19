import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/login/login/login.component';
import { FavouriteRecipesComponent } from './Modules/my-favorite-recipes/favourite-recipes/favourite-recipes.component';
import { IndexPageComponent } from './Modules/index-page/index-page/index-page.component';
import {MyRecipesComponent} from "./Modules/my-recipes/my-recipes/my-recipes.component";
import {CalendarComponent} from "./Modules/calendar/calendar/calendar.component";
import {ShoppingListComponent} from "./Modules/shopping-list/shopping-list/shopping-list.component";
import {WhatsHomeComponent} from "./Modules/whats-home/whats-home/whats-home.component";

const routes: Routes = [
  { path: 'home', component: IndexPageComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'favorites', component: FavouriteRecipesComponent },
  { path: 'shopping_list', component: ShoppingListComponent },
  { path: 'whats_home', component: WhatsHomeComponent },
  { path: 'my_recipes', component: MyRecipesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
