import { BaseEntity } from "src/app/models/base.model";

export interface Subscription extends BaseEntity {
  email: string;
}
