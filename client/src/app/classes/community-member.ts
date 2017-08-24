import {Community} from "./community";
import {Fellow} from './fellow';

export class CommunityMember {
  public pk: number;
  public is_staff: boolean;
  public is_active: boolean;
  public is_invited: boolean;
  public community: Community;
  public member: Fellow
}
