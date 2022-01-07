import { CampaignCreatorsFactory } from '../../campaign-creators/campaign-creators-factory';

/**
 * Subscriberfunction consuming campaign messages
 * campaigns signature - {...details, type: ''}
 * campaign.type is how we determine what the factory should make
 * @param req
 * @param res
 */
export default function createCampaign(message: any) {
  // validation checks
  const { type, campaign } = message.data;

  const campaignCreator = CampaignCreatorsFactory.makeCampaignCreator(type);

  campaignCreator.createSingleCampaign(campaign);
}
