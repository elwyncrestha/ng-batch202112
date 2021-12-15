import { BaseEntity } from "./base.model";

export interface User extends BaseEntity {
  firstName: string;
  lastName: string;
  address: string;
  dob: Date;
  salary: number;
}
