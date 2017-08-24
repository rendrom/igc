import {CommunityMember} from './community-member';

export class Community {
  public pk: number;
  public name: string;
  public long_name: string;
  public description: string;
  public is_public: boolean;
  public open_registration: boolean;
  public show_members: boolean;
  public slug: string;
  public member: [CommunityMember]
}

