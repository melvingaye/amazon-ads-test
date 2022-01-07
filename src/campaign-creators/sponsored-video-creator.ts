import { CampaignCreator } from '../types/campaign-creator';

export class SponsoredVideoCreator implements CampaignCreator {
  constructor() {}
  createCampaigns: () => void;
  createSingleCampaign: (campaign: any) => void;
}
