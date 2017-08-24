import {Publication} from "./publication";
import {User} from "../user";
export class Fellow {

  user: User;

  post: string;
  post_sci: string;
  post_academy: string;
  vita: string;
  phone: string;

  publications:Array<Publication>
}
