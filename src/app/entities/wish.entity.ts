import { User } from "./user.entity";
import { Initiative } from "./initiative.entity";
import { Entry } from "./entry.entity";

export interface Wish {
  id: number;
  status: string;
  createdDate: string;
  volunteerProfile: User;
  coordinatorProfile: User;
  initiative: Initiative;
  entries?: Entry[];
}
