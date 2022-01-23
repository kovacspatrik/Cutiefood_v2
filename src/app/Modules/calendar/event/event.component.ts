import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../../../Models/recipe.model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() name: string;
  @Input() img: string;

  constructor() {}

  ngOnInit(): void {
  }

}
