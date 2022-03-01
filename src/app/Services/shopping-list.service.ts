import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../Models/ingredient.model';
import { ShopListItem } from '../Models/ShopListItem.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(private http: HttpClient) {}

  getShoppingListByUserId(userId: number): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(
      `${environment.apiUrl}/user-shopping-list/user/${userId}`
    );
  }

  createShoppingListItem(data: ShopListItem) {
    return this.http.post(
      `${environment.apiUrl}/user-shopping-list/create`,
      data
    );
  }

  deleteShoppingListItem(userId: number, ingredientId: number) {
    return this.http.delete(
      `${environment.apiUrl}/user-shopping-list/delete/user/${userId}/ingredient/${ingredientId}`
    );
  }

  clearUserShoppingList(userId: number) {
    return this.http.delete(
      `${environment.apiUrl}/user-shopping-list/clear/user/${userId}`
    );
  }
}
