import { Injectable, signal } from '@angular/core';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _items = signal<Item[]>([]);
  private nextId = 1;

  readonly items = this._items.asReadonly();

  public constructor() {}

  add(item: Omit<Item, 'id'>): void {
    const newItem: Item = { ...item, id: this.nextId++ };
    this._items.update(items => [...items, newItem]);
  }

  getById(id: number): Item | undefined {
    return this._items().find(item => item.id === id);
  }

  remove(id: number): void {
    this._items.update(items => items.filter(item => item.id !== id));
  }
}