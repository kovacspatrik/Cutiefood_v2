import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/login/login/login.component';
import { FavouriteRecipesComponent } from './Modules/my-favorite-recipes/favourite-recipes/favourite-recipes.component';
import { IndexPageComponent } from './Modules/index-page/index-page/index-page.component';
import { MyRecipesComponent } from './Modules/my-recipes/my-recipes/my-recipes.component';
import { CalendarComponent } from './Modules/calendar/calendar/calendar.component';
import { ShoppingListComponent } from './Modules/shopping-list/shopping-list/shopping-list.component';
import { WhatsHomeComponent } from './Modules/whats-home/whats-home/whats-home.component';
import { AuthGuard } from './Modules/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: IndexPageComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  {
    path: 'favorites',
    component: FavouriteRecipesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shopping_list',
    component: ShoppingListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'whats_home',
    component: WhatsHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my_recipes',
    component: MyRecipesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
