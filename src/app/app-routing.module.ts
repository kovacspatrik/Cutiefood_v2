import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/login/login/login.component';
import { FavouriteRecipesComponent } from './Modules/my-favorite-recipes/favourite-recipes/favourite-recipes.component';
import { IndexPageComponent } from './Modules/index-page/index-page/index-page.component';
import {MyRecipesComponent} from "./Modules/my-recipes/my-recipes/my-recipes.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: IndexPageComponent },
  { path: 'favorites', component: FavouriteRecipesComponent },
  { path: 'my_recipes', component: MyRecipesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
