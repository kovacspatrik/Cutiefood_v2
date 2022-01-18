import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    MyRecipesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MyRecipesModule { }
