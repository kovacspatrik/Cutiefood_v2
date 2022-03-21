import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../../../Models/recipe.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  @Input() recipe: Recipe;
  @Input() name: string;
  @Input() img: string = '../../../../assets/images/cutiefood_placeholder.png';

  get recipeImageOrPlaceholder(): string {
    if (this.recipe.picture === 'default recipe picture') {
      return '../../../../assets/images/cutiefood_placeholder.png';
    }
    return `${environment.apiUrl}${this.recipe.picture}`;
  }
}
