import { CampaignCreatorFactory } from '../../campaign-creators/campaign-creator-factory';
import CampaignProcessor from '../../campaign-processor/campaign-processor';

// just an httpfunction with campaigns coming in
export default async function campaignCreator(req: any, res: any) {
  // validate request payload

  const campaignProcessor = new CampaignProcessor();

  const groupedCampaigns = campaignProcessor.createCampaignTypeGroups(req.body);

  await campaignProcessor.enqueueTasks(groupedCampaigns);
}
