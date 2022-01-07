import { CampaignCreator } from '../types/campaign-creator';
import { SponsoredBrandCreator } from './sponsored-brand-creator';
import { SponsoredProductCreator } from './sponsored-product-creator';
import { SponsoredVideoCreator } from './sponsored-video-creator';

/**
 * Responsible for creating any type of CampaignCreator allows extension into other marketplaces
 * and not just amazon.
 */
export class CampaignCreatorsFactory {
  static campaignCreators = { SponsoredBrandCreator, SponsoredProductCreator, SponsoredVideoCreator };

  public static makeCampaignCreator(type: string): CampaignCreator {
    const campaignCreator = this.campaignCreators[type];

    return new campaignCreator();
  }
}
