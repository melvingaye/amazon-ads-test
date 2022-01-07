import { CampaignCreatorFactory } from '../../campaign-creators/campaign-creator-factory';

export default function createCampaign(req: any, res: any) {
  const campaignCreator = CampaignCreatorFactory.makeCampaignCreator('type');

  campaignCreator.createSingleCampaign();
}
