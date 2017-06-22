import {PublicationItem} from "./publication";
import {User} from "../user";
export class FellowItem {

  user: User;

  post: string;
  post_sci: string;
  post_academy: string;
  vita: string;
  phone: string;

  publications:Array<PublicationItem>
}
