import { MenuItem } from './menu_item';

export interface Menu {
  id: number;
  name: string;
  description: string;
  image: string;
  startDateTime: any;
  endDateTime:any;
  menuItems:MenuItem[];
  hostId:number;
  price:number;
}

