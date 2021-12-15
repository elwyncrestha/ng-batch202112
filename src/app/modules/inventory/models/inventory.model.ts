import { BaseEntity } from "src/app/models/base.model";

export interface Inventory extends BaseEntity {
  name: string;
  quantity: string;
}
