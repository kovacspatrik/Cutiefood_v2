import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteRecipesComponent } from './favourite-recipes/favourite-recipes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FavouriteRecipesComponent],
  imports: [CommonModule, SharedModule],
})
export class MyFavoriteRecipesModule {}
