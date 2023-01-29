import { Role } from './role';
export interface User {
  id: number;
  name: string;
  shopName: string;
  email: string;
  password: string;
  shopAddress:string;
  role:Role
}

