import { CampaignCreator } from '../types/campaign-creator';

export class SponsoredBrandCreator implements CampaignCreator {
  constructor() {}
  createCampaigns: () => void;
  createSingleCampaign: (campaign: any) => void;
}
