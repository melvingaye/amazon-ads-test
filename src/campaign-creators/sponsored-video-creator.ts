import { CampaignCreator } from '../types/campaign-creator';

export class SponsoredVideoCreator implements CampaignCreator {
  cloudFnc: string;
  queue: string;

  constructor() {
    this.cloudFnc = 'cloud function name';
    this.queue = 'tasks queue name';
  }

  createCampaigns: () => {};
  createSingleCampaign: () => {};
}
