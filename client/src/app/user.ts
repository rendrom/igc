import {FellowItem} from "./fellows/fellow";

export class User extends FellowItem {
  token: string;
  is_staff: boolean;
  username: string;
  password: string;
}
