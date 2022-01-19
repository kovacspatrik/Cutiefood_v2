import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ShoppingListModule { }
