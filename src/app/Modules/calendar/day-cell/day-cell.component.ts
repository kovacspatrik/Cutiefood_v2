import {Component, Input, OnInit} from '@angular/core';
import { MOCK_RECIPE_LIST } from "../../../Services/mock-files/mock-recipes";

@Component({
  selector: 'app-day-cell',
  templateUrl: './day-cell.component.html',
  styleUrls: ['./day-cell.component.scss']
})
export class DayCellComponent implements OnInit {

  @Input() headText: string | undefined
  @Input() elements: any[] | undefined;
  recipe = MOCK_RECIPE_LIST[1];
  pic_url = "https://cdn.portfolio.hu/articles/images-lg/m/e/g/megvadulsz-ha-meglatod-mennyi-fagyasztott-pizza-fogyott-1-ev-alatt-nalunk-295599.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
