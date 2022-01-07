import { CampaignCreator } from '../types/campaign-creator';
import { SponsoredBrandCreator } from './sponsored-brand-creator';
import { SponsoredProductCreator } from './sponsored-product-creator';
import { SponsoredVideoCreator } from './sponsored-video-creator';

export class CampaignCreatorFactory {
  static campaignCreators = { SponsoredBrandCreator, SponsoredProductCreator, SponsoredVideoCreator };

  public static makeCampaignCreator(type: string): CampaignCreator {
    const campaignCreator = this.campaignCreators[type];

    return new campaignCreator();
  }
}
