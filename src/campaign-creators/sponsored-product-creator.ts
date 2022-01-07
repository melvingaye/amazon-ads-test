import { CampaignCreator } from '../types/campaign-creator';

/**
 * All the logic for how a SponsoredProduct campaign is created should live in here,
 * same for the other types of creators
 */
export class SponsoredProductCreator implements CampaignCreator {
  constructor() {}
  createCampaigns: () => void;
  createSingleCampaign: (campaign: any) => void;
}
