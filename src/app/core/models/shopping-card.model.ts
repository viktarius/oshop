import { ShoppingCardItem } from './shopping-card-item.model';

export interface ShoppingCard {
  dateCreated: string;
  items: ShoppingCardItem[];
}
