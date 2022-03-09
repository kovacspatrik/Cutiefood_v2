import { Component, OnInit, Input } from '@angular/core';
import { RecipeListService } from 'src/app/Services/recipe-list.service';
import { Recipe } from '../../../Models/recipe.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() name: string;
  @Input() img: string;

  constructor() {}

  ngOnInit(): void {}
}
